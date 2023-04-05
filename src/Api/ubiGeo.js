import Api from "./Api";
import { BASE_URL } from "./urls";

export default class UbiGeoService {
  static async getPaises() {
    try {
      const paisesRsp = await Api.get(`${BASE_URL}api/v1/UbiGeo/GetPaises`);
      const paisesRspJson = await paisesRsp.json();

      return paisesRspJson;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async getCiudad(countryCode) {
    try {
      const ciudadRsp = await Api.get(
        `${BASE_URL}api/v1/UbiGeo/GetProvincias?codUbiGeoDepartamento=${countryCode}`
      );
      const ciudadRspJson = await ciudadRsp.json();

      return ciudadRspJson;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async getDistrito(ubigeoCode) {
    try {
      const ubigeoRsp = await Api.get(
        `${BASE_URL}api/v1/UbiGeo/GetDistritos?codUbiGeoProvincia=${ubigeoCode}`
      );
      const ubigeoRspJson = await ubigeoRsp.json();

      return ubigeoRspJson;
    } catch (error) {
      console.log("error", error);
    }
  }
}
