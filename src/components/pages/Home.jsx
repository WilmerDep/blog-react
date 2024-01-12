import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
export const Home = () => {
  return (
    <>
      <div className="card">
        <div className="imgContent">
        <FontAwesomeIcon icon={faBlog} />
        </div>
        <div className="texContentHome">
          <h3>Bienvenido a mi Blog</h3>
          <p>
            Blog desarrollado con MEARN Stack <strong>(Mongo DB, Express, React y NODEJS)</strong>
          </p>
          <Link to="/articulos" className="button">
            Ir al Blog  <FontAwesomeIcon icon={faBlog} /> 
          </Link>
        </div>
      </div>
    </>
  );
};
