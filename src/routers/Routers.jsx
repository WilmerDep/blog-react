import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Articles } from "../components/pages/Articles";
import { Create } from "../components/pages/Create";
import { Search } from "../components/pages/Search";
import { SingleArticle } from "../components/pages/SingleArticle";
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
          <Route path="/buscar/:searching" element={<Search />} />
          <Route path="/articulo/:id" element={<SingleArticle/>} />

          <Route path="*" element={
            <div className="card">
                <h1>Pagina no encontrada </h1>
                <h3>ERROR 404</h3>
                <div className="backtohome">
                  <Link to="/articulos" className="button"> Volver al Blog </Link> 
                </div>
            </div>
          } />
        </Routes>
      </section>
      <Sidebar />
      </div>
      <Footer />
    </BrowserRouter>
  );
}
