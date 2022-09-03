import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import { ProductCardContainer, ProductCardImage, ProductCardDescription, ProductCardName } from './product-card.styles';

const ProductCard = ({product}) => {
   const {id, name, price, imageUrl} = product;
   const {addItemToCart} = useContext(CartContext)

   const addProduct = () => addItemToCart({id, name, price, imageUrl})

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