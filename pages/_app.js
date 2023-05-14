import { useEffect } from "react";
import { useRouter } from "next/router";
import { verifyToken } from "../components/auxiliar";
import { useAuth } from "../components/hoc/auth";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const { authenticated, login, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const checkAuthorization = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const { data } = await verifyToken(token);
          if (!data) {
            logout();
            router.push("/auth/login"); // Redirecciona al usuario a la página de inicio de sesión si el token no es válido
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        logout();
        router.push("/auth/login"); // Redirecciona al usuario a la página de inicio de sesión si no hay un token almacenado
      }
    };

    checkAuthorization();
  }, []);

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
