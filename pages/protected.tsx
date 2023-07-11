import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import Link from "next/link";
import { toast } from 'react-toastify';
const Protected: NextPage = () => {
  const router = useRouter();
  const [cookies, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    if (!cookies.token) {
      router.push("/login");
    }
  }, []);

  const logout = () => {
    removeCookie('token',{})
    toast.warning('You are logout from site')
    router.push("/login");
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="text-green font-bold lg:text-[3rem] text-2xl mt-64">
          Welcome to Protected Page in Mosbatesabz
        </div>
        <Link href={'/'} passHref><p className="text-white mt-10">Go to Home Page</p></Link>
        <button className="text-white mt-10" onClick={() => logout()}>Logout</button>
      </div>
    </>
  );
};

export default Protected;
