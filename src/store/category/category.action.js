import { createAction } from "../../utilities/reducer/reducer.utilities";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const setCategoriesMap = (categories) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories)