import {CartItemContainer, CartItemDesc, CartItemValue, CartItemNum} from './cart-item.styles.jsx';

type CartItemProps = {
   name: string;
   quantity: number;
   price: number;
   imageUrl: string;
}

const CartItem = ({name, quantity, price, imageUrl}: CartItemProps) => {
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