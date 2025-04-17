import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Cadastro from "../Pages/Cadastro";
import Login from "../Pages/Login";
import Imobi from "../Pages/Imobi";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Error from "../Pages/Error";

function RouterApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imovel" element={<Imobi />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RouterApp;
