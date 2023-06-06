import "@/styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { LanguageContextProvider } from "@/context/languageContext";

export default function App({ Component, pageProps }) {
  return (
    <LanguageContextProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </LanguageContextProvider>
  );
}
