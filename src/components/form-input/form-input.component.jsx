import {FormInputContainer, FormInputContent, FormInputLabel} from './form-input.styles'

const FormInput = ({label, handler, value, type, name, id}) => {
   return (
      <FormInputContainer>
         <FormInputContent 
            id={id} 
            className="form__input" 
            type={type} required 
            onChange={handler} 
            name={name} 
            value={value}
         />
         <FormInputLabel shrink={value} htmlFor={id}>{label}</FormInputLabel>
      </FormInputContainer>
   )
}

export default FormInput;