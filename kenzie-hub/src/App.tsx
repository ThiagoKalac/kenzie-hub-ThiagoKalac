
import RoutesMain from "./routes/routes";
import GlobalStyle from "./styles/globalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./context/UserContext";
import TechContext  from "./context/TechContext";

function App() {
  return (
    <UserProvider>
      <TechContext>
        <GlobalStyle />
        <RoutesMain />
        <ToastContainer />
      </TechContext>
    </UserProvider>

  );
}

export default App;
