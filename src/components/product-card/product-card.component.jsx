import './product-card.style.scss';
import Button from '../button/button-regular.component';

const ProductCard = ({id, productName, price, image}) => {
   return (
      <div className='product-card'>
         <img alt={id} src={image} className='product-image'/>
         <div className='product-description'>
            <h3 className='product-name'>{productName}</h3>
            <p className='product-price'>{`$${price}`}</p>
         </div>
         <div className='product-btn-container'>
            <Button buttonType={'inverted'}>Add to Cart</Button>
         </div>
      </div>
   )
}

export default ProductCard