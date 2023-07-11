import { withFormik } from "formik";
import * as yup from "yup";
import { LoginFormValuesInterface } from "../../contract";
import { toast } from 'react-toastify';
import InnerLoginForm from "../../components/auth/innerLoginForm";
import ValidationError from "../../exceptions/validationError";
import callApi from "@/app/services/axios/callApi";

const loginFormValidationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(3),
});

interface LoginFormProps {
  setCookie: any;
  router:any;
}

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
  mapPropsToValues: (props) => ({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  }),
  validationSchema: loginFormValidationSchema,
  handleSubmit: async (values, { props }) => {
    await callApi()
      .post("login", values)
      .then((res) => {
        if (res?.status === 200) {
          toast.success("login is success");
          props.setCookie("token", res.data.token, {
            maxAge: 3600 * 24 * 30,
            domain: "localhost",
            path: "/",
            sameSite: "lax",
          });
          //// redirect 
          props.router.push("/protected");
        }
      })
      .catch((err) => {});
  },
})(InnerLoginForm);

export default LoginForm;
