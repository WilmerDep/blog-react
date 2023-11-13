import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Articles } from "../components/pages/Articles";
import { Create } from "../components/pages/Create";
import { Header } from "../components/layout/Header";
import { Nav } from "../components/layout/Nav";
import { Footer } from "../components/layout/Footer";
import { Sidebar } from "../components/layout/Sidebar";

export const Routers = () => {
  return (
    <BrowserRouter>
      {/*LAYOUT*/}
      <Header />
      <Nav />
      <div className="row">
      {/* CONTENIDO CENTRAL Y RUTAS */}
      <section id="content" className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/articulos" element={<Articles />} />
          <Route path="/crear" element={<Create />} />
        </Routes>
      </section>
      <Sidebar />
      </div>
      <Footer />
    </BrowserRouter>
  );
};
