import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getDocumentAndCollection } from '../../utilities/firebase/firebase.utilities';

import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action';


export function* fetchCategoriesAsync() {
   try {
      const categoriesArray = yield call(getDocumentAndCollection, 'categories');
      yield put(fetchCategoriesSuccess(categoriesArray));
   } catch  (error) {
      yield put(fetchCategoriesFailed(error));
   }
}

export function* onFetchCategories() {
   yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categoriesSaga() {
   yield all([call(onFetchCategories)]); //All methods in the all method are completed before further executions are carried out
}