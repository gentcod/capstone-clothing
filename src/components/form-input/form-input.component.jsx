import './form-input.style.scss'

const FormInput = ({label, handler, value, type, name, id}) => {
   return (
      <div className='form-input__container'>
         <input 
            id={id} 
            className="form__input" 
            type={type} required 
            onChange={handler} 
            name={name} 
            value={value}
         />
         <label className={`${value ? 'shrink' : ''} form__input-label`} htmlFor={id}>{label}</label>
      </div>
   )
}

export default FormInput;