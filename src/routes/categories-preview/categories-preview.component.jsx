import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../context/categories.context';

import CategoryItems from '../../components/category-preview/category-item.component';

const CategoriesPreview = () => {
   const { categoriesMap } = useContext(CategoriesContext);

   return (
      <Fragment> 
         {
            Object.keys(categoriesMap).map(title => 
               {
                  const products = categoriesMap[title];
                  return (
                     <CategoryItems key={title} title={title} products={products}/>
                  )
               }
            )
         }
      </Fragment>
   );
};

export default CategoriesPreview;