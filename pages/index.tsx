import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="text-green font-bold lg:text-[3rem] text-2xl mt-64">
          Welcome to Mosbatesabz
        </div>
        <Link href={'/protected'} passHref><p className="text-white mt-10">Go to Protected Page</p></Link>
      </div>
    </>
  );
};

export default Home;
