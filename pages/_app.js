import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

function MyApp({ Component, pageProps }) {
  return  (<div>
            <Header />
            <Component {...pageProps} styles={{overflow: "hidden"}}/>
            <Footer />
          </div>);
}

export default MyApp;
