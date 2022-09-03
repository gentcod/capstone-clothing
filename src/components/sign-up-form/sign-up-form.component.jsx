import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utilities/firebase/firebase.utilities';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { FormContainer, FormHeader, FormSummary} from './sign-up-form.styles';


const defaultFormFields = {
   displayName: '',
   email: '',
   passowrd: '',
   confirmPassword: '',
}

const SignUpForm = () => {

   const [ formFields, setFormFields ] = useState(defaultFormFields);
   const { displayName, email, password, confirmPassword } = formFields;

   const handleChange = (event) => {
      const {name, value} = event.target
      setFormFields({...formFields, [name]: value})
   }

   const resetFormFields = () => {
      setFormFields(defaultFormFields);
   }

   const handleSubmit = async (event) => {
      event.preventDefault()
   
      if(password !== confirmPassword) {
         console.log('Passwords do not match');
         return;
      }

      try {
         //Get user data from sign-up authentication
         const { user } = await createAuthUserWithEmailAndPassword(email, password)

         await createUserDocumentFromAuth(user, {displayName})
         resetFormFields();
         
      } catch(err) {
         if (err.code === 'auth/email-already-in-use') {
            alert('Cannot create account, email already in use')
         }
         else console.error(err)
      }
   }

   return(
      <div>
         <FormContainer onSubmit={handleSubmit}>
            <FormHeader>I do not have an account?</FormHeader>
            <FormSummary>Sign up with your email and password</FormSummary>

            <FormInput label='Display Name' type='text' handler={handleChange} value={displayName} name='displayName' id='sign-up-name'/>
            <FormInput label='Email' type='email' handler={handleChange} value={email} name='email' id='sign-up-email'/>
            <FormInput label='Password' type='password' handler={handleChange} value={password} name='password' id='sign-up-password'/>
            <FormInput label='Confrim Password' type='password' handler={handleChange} value={confirmPassword} name='confirmPassword' id='sign-up-confirm-password'/>

            <Button type='submit'>Sign Up</Button>
         </FormContainer>
      </div>
   )
}

export default SignUpForm;