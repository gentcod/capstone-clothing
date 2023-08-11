// import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// import { CategoriesContext } from '../../context/categories.context';

import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/category/category.selector';

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

import { CategoryTitle, CategoryContainer } from './category.styles';

const Category = () => {
   const { category } = useParams(); //Get route link
   
   const isLoading = useSelector(selectCategoriesIsLoading);
   const categoriesMap = useSelector(selectCategoriesMap);
   const [products, setProducts] = useState(categoriesMap[category as string]); //Set products inital value

   useEffect(() => {
      setProducts(categoriesMap[category as string]); //Change products value when route link changes and categoriesMap changes in the context
   }, [category, categoriesMap])

   return (
      <>
         <CategoryTitle>{(category as string).toUpperCase()}</CategoryTitle>
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

//Always include guard clause when fetching data from api or dataabse