import "./App.css";
import "bulma/css/bulma.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./context/AuthContextProvider.jsx";
import AppRouter from "./router/AppRouter";

function App() {
    return (
        <AuthContextProvider>
            <AppRouter />
            <ToastContainer />
        </AuthContextProvider>
    );
}

export default App;
