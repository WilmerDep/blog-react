import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <div className="card">
        <div className="imgContent">
          <img src="https://picsum.photos/id/237/200/300" alt="" />
        </div>
        <div className="texContentHome">
          <h3>Bienvenido al mi Blog</h3>
          <p>
            Blog desarrollado con MEARN Stack <strong>(Mongo, Express, React y NODEJS)</strong>
          </p>
          <Link to="/articulos" className="button">
            Ir al Blog
          </Link>
        </div>
      </div>
    </>
  );
};
