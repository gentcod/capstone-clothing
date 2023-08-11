import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

// import { signInWithGooglePopUp, signInAuthUserWithEmailAndPassword } from '../../utilities/firebase/firebase.utilities';
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action'

import FormInput from '../form-input/form-input.component';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import { ButtonContainer } from '../button/button.styles';
import { FormHeader, FormSummary } from '../sign-up-form/sign-up-form.styles';
import { FormSignIn } from './sign-in-form.styles';
import { AuthError, AuthErrorCodes } from 'firebase/auth';

// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
//To sign in with google redirect
// import { signInWithGoogleRedirect, auth } from '../../utilities/firebase/firebase.utilities'

const defaultFormFields = {
   email: '',
   password: '',
}

const SignInForm = () => {
   const dispatch = useDispatch();

   //Sign in with email
   const [formFields, setFormFields] = useState(defaultFormFields);
   const { email, password } = formFields;

   //Sign in with google popup
   const signInWithgGoogle = async () => {
      // await signInWithGooglePopUp();
      dispatch(googleSignInStart());
   };

   const resetFormFields = () => {
      setFormFields(defaultFormFields);
   }


   const handleSubmit = async (event: FormEvent) => {
      event.preventDefault();

      try {
         dispatch(emailSignInStart(email, password))
         resetFormFields();

      } catch (err) {
         if((err as AuthError).code === AuthErrorCodes.INVALID_EMAIL) {
            alert('Password or email incorrect, check again')
            return;
         }

         if((err as AuthError).code === AuthErrorCodes.USER_DELETED) {
            alert('Account not registered, try signing up')
         }

         console.error((err as AuthError).message);
      }
   }

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const {name, value} = event.target
      setFormFields({...formFields, [name]: value})
   }

   return(
      <div>
         <FormSignIn onSubmit={handleSubmit}>
            <FormHeader>I already have an account?</FormHeader>
            <FormSummary>Sign in with your email and password</FormSummary>

            <FormInput label='Email' type='email' onChange={handleChange} name='email' id='sign-in-email'/>
            <FormInput label='Password' type='password' onChange={handleChange} name='password' id='sign-in-password'/>

            <ButtonContainer>
               <Button type='submit'>Sign In</Button>
               <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithgGoogle}>Sign in with Google</Button>
            </ButtonContainer>
         </FormSignIn>

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