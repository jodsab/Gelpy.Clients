import AccessRegistertemplate from "../../components/templates/AccessRegisterTemplate";
import UbiGeoService from "../../../Api/ubiGeo";
import React, { useState, useEffect } from "react";

const AccessRegisterPage = ({ navigation }) => {
  const [countrys, setCountrys] = useState();
  const [citys, setCitys] = useState();
  const [districts, setDistricts] = useState();

  const getPaises = async () => {
    const paisData = await UbiGeoService.getPaises();
    setCountrys(paisData);
  };

  const onChangeCodeGetCitys = async (code) => {
    const ciudadData = await UbiGeoService.getCiudad(code);
    setCitys(ciudadData.filter((e) => e.codUbiGeo != null));
  };

  const onChangeCitysGetDistricts = async (code) => {
    const districtData = await UbiGeoService.getDistrito(code);
    setDistricts(districtData.filter((e) => e.codUbiGeo != null));
  };

  useEffect(() => {
    getPaises();
  }, []);

  return (
    <AccessRegistertemplate
      navigation={navigation}
      onChangeCodeGetCitys={onChangeCodeGetCitys}
      onChangeCitysGetDistricts={onChangeCitysGetDistricts}
      countrys={countrys}
      districts={districts}
      citys={citys}
    />
  );
};

export default AccessRegisterPage;
