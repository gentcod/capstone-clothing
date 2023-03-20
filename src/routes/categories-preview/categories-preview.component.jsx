// import { useContext } from 'react';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/category/category.selector';

import Spinner from '../../components/spinner/spinner.component';
import CategoryItems from '../../components/category-preview/category-item.component';

const CategoriesPreview = () => {
   const isLoading = useSelector(selectCategoriesIsLoading);
   const categoriesMap = useSelector(selectCategoriesMap);

   return (
      <Fragment>
         {
            isLoading ? <Spinner/> :
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