// import { useContext } from 'react';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../../store/category/category.selector';

// import { CategoriesContext } from '../../context/categories.context';


import CategoryItems from '../../components/category-preview/category-item.component';

const CategoriesPreview = () => {
   // const { categoriesMap } = useContext(CategoriesContext);
   const categoriesMap = useSelector(selectCategories);

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