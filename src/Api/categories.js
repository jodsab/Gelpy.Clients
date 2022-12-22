import Api from "./Api";
import { BASE_URL } from "./urls";

export default class CategoriesService {
  static async getCategories(jwt) {
    try {
      const rspCategories = await Api.getWithCredentials(
        `${BASE_URL}/api/v1/Categories/GetCategories`,
        jwt
      );
      const rspJson = rspCategories.json();

      return rspJson;
    } catch (error) {
      console.log("error", error);
    }
  }
}
