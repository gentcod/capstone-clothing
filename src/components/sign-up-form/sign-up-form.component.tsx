import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch} from 'react-redux';
import { AuthError, AuthErrorCodes} from 'firebase/auth';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { FormContainer, FormHeader, FormSummary} from './sign-up-form.styles';

import { signUpStart } from '../../store/user/user.action';

const defaultFormFields = {
   displayName: '',
   email: '',
   password: '',
   confirmPassword: '',
}

const SignUpForm = () => {

   const [ formFields, setFormFields ] = useState(defaultFormFields);
   const { displayName, email, password, confirmPassword } = formFields;
   const dispatch = useDispatch();

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const {name, value} = event.target
      setFormFields({...formFields, [name]: value})
   }

   const resetFormFields = () => {
      setFormFields(defaultFormFields);
   }

   const handleSubmit = async (event: FormEvent) => {
      event.preventDefault()
   
      if(password !== confirmPassword) {
         console.log('Passwords do not match');
         return;
      }

      try {
         //Get user data from sign-up authentication
         // const { user } = await createAuthUserWithEmailAndPassword(email, password)

         // await createUserDocumentFromAuth(user, {displayName})
         dispatch(signUpStart(email, password, displayName))
         resetFormFields();
         
      } catch(error) {
         if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
            alert("Cannot create user, email already in use");
         }
         console.error(error)
      }
   }

   return(
      <div>
         <FormContainer onSubmit={handleSubmit}>
            <FormHeader>I do not have an account?</FormHeader>
            <FormSummary>Sign up with your email and password</FormSummary>

            <FormInput label='Display Name' type='text' onChange={handleChange} name='displayName' id='sign-up-name'/>
            <FormInput label='Email' type='email' onChange={handleChange} name='email' id='sign-up-email'/>
            <FormInput label='Password' type='password' onChange={handleChange} name='password' id='sign-up-password'/>
            <FormInput label='Confrim Password' type='password' onChange={handleChange} name='confirmPassword' id='sign-up-confirm-password'/>

            <Button type='submit' onClick={handleSubmit}>Sign Up</Button>
         </FormContainer>
      </div>
   )
}

export default SignUpForm;