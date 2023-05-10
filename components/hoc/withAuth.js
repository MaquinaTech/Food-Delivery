import { useAuth } from "./auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { verifyToken } from "../auxiliar";
import toast from "react-toastify";

const withAuth = (Component) => {
  const Auth = (props) => {
    const router = useRouter();
    const { authenticated } = useAuth();
    //Get toke  local storage
    const token = localStorage.getItem("token");
    //Verify token
    const {data} = verifyToken(token);
    try {
      // Make login request
      const {data} = await verifyToken(token);
    }
    catch (error) {
      console.log(error);
    }
    

    useEffect(() => {
      if (!authenticated) {
        router.push({
          pathname: "/auth/login",
          query: { error: "Debes iniciar sesión para acceder a esta página" },
        });
      }
    }, [authenticated]);

    return <Component {...props} authenticated={authenticated} />;
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
