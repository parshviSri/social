import "../styles/globals.css";
import store from "./state/store";
import { Provider } from "react-redux";
import Navbar from "./components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
