import { Form, FormikProps } from "formik";
import { LoginFormValuesInterface } from "../../contract";
import Input from "../shared/form/input";

const InnerRegisterForm = (props: FormikProps<LoginFormValuesInterface>) => {
  return (
    <Form className="space-y-6">
      <div className="pt-5">
        <Input
          name="email"
          type="email"
          label="Email Address"
          placeholder="email"
        />
      </div>
      <div>
        <Input
          name="password"
          type="password"
          label="Password"
          placeholder="password"
        />
      </div>
      <div className="py-3">
        <button
          type="submit"
          className="flex justify-center py-2 px-5 w-full rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-tr from-backGreen to-green hover:bg-backGreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Register
        </button>
      </div>
    </Form>
  );
};

export default InnerRegisterForm;
