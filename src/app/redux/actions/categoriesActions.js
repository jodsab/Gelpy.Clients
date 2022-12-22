import { SAVE_CATEGORIES } from "../types/categories";

export const storeCategories = (categories) => ({
  type: SAVE_CATEGORIES,
  payload: categories,
});
