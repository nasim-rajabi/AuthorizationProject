import { withFormik } from "formik";
import Router from "next/router";
import * as yup from "yup";
import { LoginFormValuesInterface } from "../../contract";
import InnerRegisterForm from "../../components/auth/innerRegisterForm";
import { toast } from 'react-toastify';
import callApi from "@/app/services/axios/callApi";

const registerFormValidationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(3),
});

interface registerFormProps {
  setCookie: any;
}

const RegisterForm = withFormik<registerFormProps, LoginFormValuesInterface>({
  mapPropsToValues: (props) => ({
    email: "",
    password: "",
  }),
  validationSchema: registerFormValidationSchema,
  handleSubmit: async (values, { props }) => {
    await callApi()
      .post("register", values)
      .then((res) => {
        if (res?.status === 200) {
          toast.success("register is success");
          Router.push("/login");
        }
      })
      .catch((err) => {});
  },
})(InnerRegisterForm);

export default RegisterForm;
