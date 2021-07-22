import "../../styles/style.css";
import Menu from "../../components/Menu"
import Footer from "../../components/Footer"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
       <Footer/>
    </>
  );
}
