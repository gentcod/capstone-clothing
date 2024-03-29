import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/category/category.selector';

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

import { CategoryTitle, CategoryContainer } from './category.styles';

const Category = () => {
   const { category } = useParams(); 
   const isLoading = useSelector(selectCategoriesIsLoading);
   const categoriesMap = useSelector(selectCategoriesMap);
   const [products, setProducts] = useState(categoriesMap[category]);

   useEffect(() => {
      setProducts(categoriesMap[category]);
   }, [category, categoriesMap])

   return (
      <>
         <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
         {
            isLoading ? <Spinner/> :
            <CategoryContainer>
            {
               products && products.map(product => (
                  <ProductCard key={product.id} product={product}/>
               ))
            }
         </CategoryContainer>
         }

      </>
   )
};

export default Category;