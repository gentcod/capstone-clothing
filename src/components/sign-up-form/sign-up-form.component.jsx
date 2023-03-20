import { useState } from 'react';
import { useDispatch} from 'react-redux'

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { FormContainer, FormHeader, FormSummary} from './sign-up-form.styles';

import { signUpStart } from '../../store/user/user.action';

const defaultFormFields = {
   displayName: '',
   email: '',
   passowrd: '',
   confirmPassword: '',
}

const SignUpForm = () => {

   const [ formFields, setFormFields ] = useState(defaultFormFields);
   const { displayName, email, password, confirmPassword } = formFields;
   const dispatch = useDispatch();

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
         dispatch(signUpStart(email, password, displayName))
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

            <FormInput label='Display Name' type='text' handler={handleChange} name='displayName' id='sign-up-name'/>
            <FormInput label='Email' type='email' handler={handleChange} name='email' id='sign-up-email'/>
            <FormInput label='Password' type='password' handler={handleChange} name='password' id='sign-up-password'/>
            <FormInput label='Confrim Password' type='password' handler={handleChange} name='confirmPassword' id='sign-up-confirm-password'/>

            <Button type='submit' onClick={handleSubmit}>Sign Up</Button>
         </FormContainer>
      </div>
   )
}

export default SignUpForm;