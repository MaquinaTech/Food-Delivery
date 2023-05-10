import { useEffect, useState } from "react";
import { verifyToken } from "../components/auxiliar";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} styles={{ overflow: "hidden !important" }} />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default MyApp;
