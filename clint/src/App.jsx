import "./App.css";
import Header from "./components/header/Header";
import Signup from "./components/registration/Signup";
import SignIn from "./components/registration/SignIn";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/404/notFound";
import DashBoard from "./pages/dashBoard/DashBoard";
import AddOrder from "./pages/addOrder/AddOrder";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-user" element={<Signup />} />
          <Route path="/login-user" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/add-order" element={<AddOrder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
