import * as yup from "yup";

let validations = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli Bir Email Girin!! ")
    .required("Zorunlu Alan!!"),
  password: yup.string().min(5).required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")])
    .required(),
});

export default validations;
