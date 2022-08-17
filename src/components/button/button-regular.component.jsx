import './button-regular.style.scss'

//Config Helper Variables for styling
const BUTTON_TYPE_CLASSES = {
   google: 'btn-regular--google',
   inverted: 'btn-regular--inverted',
};

const Button = ({children, buttonType, ...otherProps}) => {
   return (
      <button className={`btn-regular ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
   )
}

export default Button;