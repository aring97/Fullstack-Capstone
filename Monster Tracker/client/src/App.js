import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews";
import { UserProvider } from "./providers/UserProvider";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AppHeader from "./components/AppHeader";

function App() {
    return (
        <div className="App">
            <ToastContainer position="bottom-right" hideProgressBar />
            <UserProvider>
                    <Router>
                        <AppHeader />
                        <ApplicationViews />
                    </Router>
            </UserProvider>
        </div>
    );
}

export default App;