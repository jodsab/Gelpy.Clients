import CategoriesService from "../../../Api/categories";
import { SAVE_CATEGORIES } from "../types/categories";

export const initialState = {
  loading: false,
  categories: [],
  error: null,
};

export const setCategories = (data, id) => {
  if (id) {
    return async (dispatch) => {
      const response = await CategoriesService.getCategories(id);
      dispatch(setUserInfo(response?.token));
      localStorage.setItem("authTokenGelpy", response?.token);
    };
  }
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_CATEGORIES: {
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    }
    default:
      return state;
  }
}
