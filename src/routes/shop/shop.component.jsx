import { useContext } from 'react';
import { ProductsContext } from '../../context/products.context';
import ProductCard from '../../components/product-card/product-card.component';

import './shop.styles.scss';

const Shop = () => {
   const {products} = useContext(ProductsContext);

   return (
      <div className='products-container'>
         {products.map(({name, id, price, imageUrl}) =>          
            <ProductCard productName={name} key={id} price={price} image={imageUrl} id={id}/>
         )};
      </div>
   );
};

export default Shop;