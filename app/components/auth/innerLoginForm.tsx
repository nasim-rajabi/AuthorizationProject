import { Form, FormikProps } from "formik";
import { LoginFormValuesInterface } from "../../contract";
import Input from "../shared/form/input";

const InnerLoginForm = (props: FormikProps<LoginFormValuesInterface>) => {
  return (
    <Form className="space-y-6">
      <div>
        <Input
          name="email"
          type="email"
          label="Email Address"
        />
      </div>
      <div>
        <Input
          name="password"
          type="password"
          label="Password"
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={props.isSubmitting}
          className="w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-green hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {
            props.isSubmitting ? 'Loading ...' : 'Login'
          }
          
        </button>
      </div>
    </Form>
  );
};

export default InnerLoginForm;
