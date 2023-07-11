import React from "react";
import Head from "next/head";

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mosbatesabz</title>
        <meta name="description" content="login page" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://mosbatesabz.com/favicon-32x32.png"
        ></link>
        <meta charSet="utf-8" />
      </Head>
      <main className="w-full container-fluid">{children}</main>
    </>
  );
};

export default MainLayout;
