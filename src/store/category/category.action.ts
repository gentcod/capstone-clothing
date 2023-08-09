import { createAction, Action, ActionWithPayload, withMatcher } from "../../utilities/reducer/reducer.utilities";
import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";

export type SetCatgeoriesMap = ActionWithPayload<CATEGORIES_ACTION_TYPES.SET_CATEGORIES, Category[]>

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCESS, Category[]>

export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>

export type CategoryAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFailed | SetCatgeoriesMap

export const setCategoriesMap = withMatcher((categories: Category[]): SetCatgeoriesMap => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories));

export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess = withMatcher((categories: Category[]): FetchCategoriesSuccess => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCESS, categories));

export const fetchCategoriesFailed = withMatcher((error: Error): FetchCategoriesFailed => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error));
