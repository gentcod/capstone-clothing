import './cart-item.style.scss';

const CartItem = ({cartItem}) => {
   const {productName, quantity, price, image} = cartItem

   return (
      <div className='cart-item'>
         <img src={image} alt='Product'/>
         <div className='cart-item-desc'>
            <h4>{productName}</h4>
            <div className='cart-item-value'>
               <p>${price}</p>
               <p>X</p>
               <p className='cart-item-num'>{quantity}</p>
            </div>
         </div>
      </div>
   );
}

export default CartItem;