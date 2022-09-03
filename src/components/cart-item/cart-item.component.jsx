import {CartItemContainer, CartItemDesc, CartItemValue, CartItemNum} from './cart-item.styles.jsx';

const CartItem = ({cartItem}) => {
   const {name, quantity, price, imageUrl} = cartItem

   return (
      <CartItemContainer>
         <img src={imageUrl} alt='Product'/>
         <CartItemDesc>
            <h4>{name}</h4>
            <CartItemValue>
               <p>${price}</p>
               <p>X</p>
               <CartItemNum>{quantity}</CartItemNum>
            </CartItemValue>
         </CartItemDesc>
      </CartItemContainer>
   );
}

export default CartItem;