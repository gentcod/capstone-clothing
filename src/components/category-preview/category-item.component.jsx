import ProductCard from '../product-card/product-card.component';

import {CategoryItemsContainer, CategoryItemsTitle, CategoryItemsContent} from './category-item.styles';

const CategoryItems = ({title, products}) => {
   return (
      <CategoryItemsContainer>
         <h2>
            <CategoryItemsTitle to={title}>{title.toUpperCase()}</CategoryItemsTitle>
         </h2>

         <CategoryItemsContent>
            {
               products.filter((_, i) => i < 4)
               .map(product => (
                     <ProductCard key={product.id} product={product}/>
                  )
               )
            }
         </CategoryItemsContent>
      </CategoryItemsContainer>
   )
};

export default CategoryItems;