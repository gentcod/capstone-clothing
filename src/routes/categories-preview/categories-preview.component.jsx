// import { useContext } from 'react';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/category/category.selector';

// import { CategoriesContext } from '../../context/categories.context';


import CategoryItems from '../../components/category-preview/category-item.component';

const CategoriesPreview = () => {
   // const { categoriesMap } = useContext(CategoriesContext);
   const categoriesMap = useSelector(selectCategoriesMap);

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