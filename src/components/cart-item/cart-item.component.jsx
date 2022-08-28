import './cart-item.style.scss';

const CartItem = ({cartItem, quantity, price, image}) => {
   return (
      <div className='cart-item' key={1}>
         <img src='https://i.ibb.co/ypkgK0X/blue-beanie.png' alt='Product'/>
         <div className='cart-item-desc'>
            <h4>Product Name</h4>
            <div className='cart-item-value'>
               <p>$25</p>
               <p>X</p>
               <p className='cart-item-num'>20</p>
            </div>
         </div>
      </div>
   );
}

export default CartItem;