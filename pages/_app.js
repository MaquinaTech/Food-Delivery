import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import styles from "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return  (<div>
            <Header />
            <Component {...pageProps} styles={{overflow: "hidden"}}/>
            <Footer />
          </div>);
}

export default MyApp;
