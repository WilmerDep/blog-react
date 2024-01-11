import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
export const Nav = () => {
  const searchNavigate = useNavigate();

  const goSearch = (e) => {
    e.preventDefault();
    let mySearch = e.target.searchFile.value;
    searchNavigate("/buscar/" + mySearch, { replace: true });
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <div> 
            <Link to="/"><FontAwesomeIcon icon={faBlog} /></Link>
          </div>
        </li>

        <li>
          <NavLink to="/inicio">Inicio</NavLink>
        </li>

        <li>
          <NavLink to="/articulos">Blog</NavLink>
        </li>

        <li>
          <NavLink to="/crear">Crear articulo</NavLink>
        </li>
        <li>
          <div className="searchNav">
            <form onSubmit={goSearch}>
              <input type="text" name="searchFile" placeholder="Buscar..." />
              <input type="submit" id="search" value="Buscar" />
            </form>
          </div>
        </li>
      </ul>
    </nav>
  );
};
