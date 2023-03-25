import "./App.css";
import Home from "./components/Home/Home.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginHome from "./components/Login/LoginHome";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" Component={Home} />
                <Route path="/login" Component={LoginHome}></Route>
                <Route path="*" Component={Err} />
            </Routes>
        </Router>
    );
}

const Err = () => {
    return (
        <div>
            <center style={{ margin: "28em auto" }}>
                <h1>Error 404: Page Not Found</h1>
            </center>
        </div>
    );
};

export default App;
