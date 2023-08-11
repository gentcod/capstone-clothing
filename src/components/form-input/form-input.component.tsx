import { InputHTMLAttributes, FC } from 'react';
import {FormInputContainer, FormInputContent, FormInputLabel} from './form-input.styles'

type FormInputProps = { 
   label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({label, value, type, name, id}) => {
   return (
      <FormInputContainer>
         <FormInputContent 
            id={id} 
            className="form__input" 
            type={type} required 
            name={name} 
            value={value}
         />
         <FormInputLabel shrink={Boolean(value && typeof value === 'string' && value.length)} htmlFor={id}>{label}</FormInputLabel>
      </FormInputContainer>
   )
}

export default FormInput;