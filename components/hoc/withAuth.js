import { useAuth } from "./auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import toast from "react-toastify";

const withAuth = (Component) => {
  const Auth = (props) => {
    const router = useRouter();
    const { authenticated } = useAuth();

    useEffect(() => {
      if (!authenticated) {
        router.push({
          pathname: "/auth/login",
          query: { error: "Debes iniciar sesión para acceder a esta página" },
        });
      }
    }, [authenticated, router]);

    return authenticated ? <Component {...props} /> : null;
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;