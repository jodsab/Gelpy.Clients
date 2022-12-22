import Api from "./Api";
import { BASE_URL } from "./urls";

export default class UsersService {
  static async getLoginUser(data) {
    try {
      const loginRsp = await Api.post(`${BASE_URL}api/v1/Security/LogIn`, data);
      const loginRspJson = await loginRsp.json();

      return loginRspJson;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async postRegister(data) {
    try {
      const registerRsp = await Api.post(
        `${BASE_URL}api/v1/Security/Register`,
        data
      );
      const registerRspJson = await registerRsp.json();

      return registerRspJson;
    } catch (error) {
      console.log("error", error);
    }
  }
}
