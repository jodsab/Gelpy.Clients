import * as t from "../../../../core/constants/translations/index";
import * as yup from "yup";

const { form } = t?.default?.accessRegister;

const registerValidationSchema = yup.object().shape({
  firstName: yup.string().required(form?.firstName?.required),
  lastName: yup.string().required(form?.lastName?.required),
  email: yup.string().required(form?.email?.required),
  password: yup
    .string()
    .required(form?.password?.required)
    .min(5, form?.password?.minChars)
    .matches(/[a-z]/, form?.password?.lowerCase)
    .matches(/[A-Z]/, form?.password?.upperCase)
    .matches(/[^\w]/, form?.password?.alphaNumeric),
  phoneNumber: yup
    .string()
    .test("len", form?.cellphone?.chars, (val) => val.length === 9)
    .required(form?.cellphone?.required),
  code: yup.object().required(form?.countryCode?.required),
  city: yup.object().required(form?.city?.required),
  district: yup.object().required(form?.district?.required),
});

export default registerValidationSchema;
