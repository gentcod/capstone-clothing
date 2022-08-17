import { useState } from 'react';
import { signInWithGooglePopUp, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utilities/firebase/firebase.utilities';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button-regular.component';

// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
//To sign in with google redirect
// import { signInWithGoogleRedirect, auth } from '../../utilities/firebase/firebase.utilities'

import './sign-in-form.style.scss';

const defaultFormFields = {
   email: '',
   passowrd: '',
}

const SignInForm = () => {

   //Sign in with google popup
   const signInWithgGoogle = async () => {
      const {user} = await signInWithGooglePopUp();
      const userDcoRef = await createUserDocumentFromAuth(user);
   };

   //Sign in with email
   const [formFields, setFormFields] = useState(defaultFormFields);
   const { email, password } = formFields;

   const resetFormFields = () => {
      setFormFields(defaultFormFields);
   }


   const handleSubmit = async (event) => {
      event.preventDefault();

      try {
         const response = await signInAuthUserWithEmailAndPassword(email, password);
         console.log(response)

         resetFormFields();
      } catch (err) {
         if(err.code === 'auth/wrong-password') {
            alert('Password or email incorrect, check again')
            return;
         }

         if(err.code === 'auth/user-not-found') {
            alert('Account not registered, try signing up')
         }

         console.error(err.message);
      }
   }

   const handleChange = (event) => {
      const {name, value} = event.target
      setFormFields({...formFields, [name]: value})
   }

   return(
      <div>
         <form className="form__container form__sign-in" onSubmit={handleSubmit}>
            <h2 className="form__header">I already have an account?</h2>
            <p className="form__summary">Sign in with your email and password</p>

            <FormInput label='Email' type='email' handler={handleChange} value={email} name='email' id='sign-in-email'/>
            <FormInput label='Password' type='password' handler={handleChange} value={password} name='password' id='sign-in-password'/>

            <div className="btn-container">
               <Button type='submit'>Sign In</Button>
               <Button type='button' buttonType='google' onClick={signInWithgGoogle}>Sign in with Google</Button>
            </div>
         </form>

      </div>
   )
}

export default SignInForm;

////////////////////////////////////////////
//Sign in with google redirect
//Paste in conponent above

// useEffect(() => {
//    const fetchData = async () => {
//       const response = await getRedirectResult(auth);
      
//       if (response) {
//          const userDcoRef = await createUserDocumentFromAuth(response.user);
//          console.log(userDcoRef);
//       }
//    };
//    fetchData();
// }, []);