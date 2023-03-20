import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { googleSignInStart, emailSignInStart } from '../../store/user/user.action'

import FormInput from '../form-input/form-input.component';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import { ButtonContainer } from '../button/button.styles';
import { FormHeader, FormSummary } from '../sign-up-form/sign-up-form.styles';
import { FormSignIn } from './sign-in-form.styles';

const defaultFormFields = {
   email: '',
   passowrd: '',
}

const SignInForm = () => {
   const dispatch = useDispatch();
   const [formFields, setFormFields] = useState(defaultFormFields);
   const { email, password } = formFields;

   const signInWithgGoogle = async () => {
      dispatch(googleSignInStart());
   };

   const resetFormFields = () => {
      setFormFields(defaultFormFields);
   }


   const handleSubmit = async (event) => {
      event.preventDefault();

      try {
         dispatch(emailSignInStart(email, password))
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
         <FormSignIn onSubmit={handleSubmit}>
            <FormHeader>I already have an account?</FormHeader>
            <FormSummary>Sign in with your email and password</FormSummary>

            <FormInput label='Email' type='email' handler={handleChange} name='email' id='sign-in-email'/>
            <FormInput label='Password' type='password' handler={handleChange} name='password' id='sign-in-password'/>

            <ButtonContainer>
               <Button type='submit'>Sign In</Button>
               <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithgGoogle}>Sign in with Google</Button>
            </ButtonContainer>
         </FormSignIn>

      </div>
   )
}

export default SignInForm;