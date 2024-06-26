import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Navbar from "./components/navbar/Navbar";
import SignUp from "./pages/sign-up/SignUp";
import Users from "./pages/users/Users";
import Product from "./pages/product/Product";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/users" element={<Users />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </>
  );
}

export default App;
