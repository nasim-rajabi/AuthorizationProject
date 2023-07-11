import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../app/layout/mainLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/style.css";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <CookiesProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </CookiesProvider>
    </MainLayout>
  );
}

export default MyApp;
