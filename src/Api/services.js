import Api from "./Api";
import { BASE_URL } from "./urls";

export default class ServicesService {
  static async getServices() {
    try {
      const servicesRsp = await Api.get(`${BASE_URL}api/v1/Search/GetServices`);
      const servicesRspJson = await servicesRsp.json();

      return servicesRspJson;
    } catch (error) {
      console.log("error", error);
    }
  }
}
