import { url } from "inspector";
import type { NextPage } from "next";
import Link from "next/link";
import { useCookies } from "react-cookie";
import LoginForm from "../app/forms/auth/loginForm";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  const router = useRouter();

  return (
    <>
      <div className="min-h-screen flex items-stretch text-white bg-white">
        <div className="lg:flex w-1/2 hidden bg-gray bg-no-repeat bg-cover relative items-center image bg-green"></div>
        <div className="lg:w-1/2 w-full md:px-16 px-0 z-0">
          <div className="w-full py-6 z-20 flex flex-col justify-center items-center ml-auto mr-auto mt-32">
            <h1 className="my-6  flex justify-center">
              <img
                src="https://mosbatesabz.com/wp-content/uploads/2022/01/logo-mosbate-sabz.png"
                className="w-32"
              />
            </h1>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
              <div className="bg-white py-8 px-4 sm:px-10 ">
                <LoginForm setCookie={setCookie} router={router} />
              </div>
              <div className="text-center flex justify-center">
                <Link href="/register" passHref>
                  <p className="text-blue">Signup</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
