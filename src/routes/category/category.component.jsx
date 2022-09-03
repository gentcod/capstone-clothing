import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import { CategoriesContext } from '../../context/categories.context';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoryContainer } from './category.styles';

const Category = () => {
   const { category } = useParams(); //Get route link
   const { categoriesMap } = useContext(CategoriesContext); 
   const [products, setProducts] = useState(categoriesMap[category]); //Set products inital value

   useEffect(() => {
      setProducts(categoriesMap[category]); //Change products value when route link changes and categoriesMap changes in the context
   }, [category, categoriesMap])


   return (
      <CategoryContainer>
         {
            products && products.map(product => (
               <ProductCard key={product.id} product={product}/>
            ))
         }
      </CategoryContainer>
   )
};

export default Category;

//Always include guard clause when fetching data from api or dataabse