// import { getDocumentAndCollection } from '../../utilities/firebase/firebase.utilities';
import { createAction } from "../../utilities/reducer/reducer.utilities";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const setCategoriesMap = (categories) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories)

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCESS, categories);

export const fetchCategoriesFailed = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);