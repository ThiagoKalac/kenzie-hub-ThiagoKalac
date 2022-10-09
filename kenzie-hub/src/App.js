
import RoutesMain from "./routes/routes";
import GlobalStyle from "./styles/globalStyle";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Flip } from 'react-toastify';

function App() {
  return (
    <>
      <GlobalStyle />
      <RoutesMain/>
      <ToastContainer transition={Flip} position = "top-center"/>

    </>
  );
}

export default App;
