import type { NextPage } from "next";
import RegisterForm from "../app/forms/auth/registerForm";
import { useCookies } from "react-cookie";
import BoxDesign from "../app/components/registerDesign/boxDesign";
import Link from "next/link";

const Register: NextPage = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  return (
    <>
      <div className="h-screen lg:flex">
        <BoxDesign />
        <div className="flex flex-col lg:w-1/2 justify-center py-10 items-center bg-white">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-backGreen to-green shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 border border-green bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-textColor">
                Register on <span className="text-green">Mosbatesabz</span>
              </h2>
              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
                <div className="bg-white border border-green py-8 px-4 shadow sm:rounded-lg sm:px-10">
                  <RegisterForm setCookie={setCookie} />
                </div>
                
              <div className="text-center flex justify-center">
                <Link href="/login" passHref>
                  <p className="text-blue">Signin</p>
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
