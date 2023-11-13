import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
   
      <div className="card">
        <div className="imgContent">
          <img src="https://picsum.photos/id/237/200/300" alt="" />
          <p>IMG</p>
        </div>
        <div className="texContentHome">
          <h3>Bienvenido al mi Blog Git</h3>
          <p>
            Blog desarrollado con MEARN Stack(Mongo, Express, React y NODEJS)
          </p>
          <Link to="/articulos" className="button">Ir al Blog</Link>
        </div>
      </div>
    </>
  );
};
