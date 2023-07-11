import { ErrorMessage, Field } from "formik";
import { FC } from "react";

interface InputProps {
  name: string;
  label: string;
  type?: string;
  inputClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
}

const Input: FC<InputProps> = ({
  name,
  label,
  type = "text",
  inputClassName,
  labelClassName,
  errorClassName,
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className={`block text-sm font-medium text-green ${
          labelClassName ?? ""
        }`}
      >
        {label}
      </label>
      <Field
        placeholder={name}
        id={name}
        name={name}
        type={type}
        className={`mt-1 appearance-none block w-full px-3 py-2 border text-backColor border-borderColor rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue focus:border-blue sm:text-sm ${
          inputClassName ?? ""
        }`}
      />
      <ErrorMessage
        name={name}
        className={`text-red text-sm ${errorClassName ?? ""}`}
        component="div"
      />
    </>
  );
};

export default Input;
