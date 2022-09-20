// import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// import { CategoriesContext } from '../../context/categories.context';

import { useSelector } from 'react-redux';
import { selectCategories } from '../../store/category/category.selector';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoryTitle, CategoryContainer } from './category.styles';

const Category = () => {
   const { category } = useParams(); //Get route link
   // const { categoriesMap } = useContext(CategoriesContext); 
   const categoriesMap = useSelector(selectCategories);
   const [products, setProducts] = useState(categoriesMap[category]); //Set products inital value

   useEffect(() => {
      setProducts(categoriesMap[category]); //Change products value when route link changes and categoriesMap changes in the context
   }, [category, categoriesMap])


   return (
      <>
         <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
         <CategoryContainer>
            {
               products && products.map(product => (
                  <ProductCard key={product.id} product={product}/>
               ))
            }
         </CategoryContainer>
      </>
   )
};

export default Category;

//Always include guard clause when fetching data from api or dataabse