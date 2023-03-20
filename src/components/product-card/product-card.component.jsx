import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import { ProductCardContainer, ProductCardImage, ProductCardDescription, ProductCardName } from './product-card.styles';

const ProductCard = ({product}) => {
   const {id, name, price, imageUrl} = product;

   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);

   const addProduct = () => dispatch(addItemToCart(cartItems, product))

   return (
      <ProductCardContainer>
         <ProductCardImage alt={id} src={imageUrl} />
         <ProductCardDescription>
            <ProductCardName>{name}</ProductCardName>
            <p>{`$${price}`}</p>
         </ProductCardDescription>
         <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProduct}>Add to Cart</Button>
      </ProductCardContainer>
   )
}

export default ProductCard;