import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export const Nav = () => {
  const searchNavigate = useNavigate();

  const goSearch = (e) => {
    e.preventDefault();
    let mySearch = e.target.searchFile.value;
    searchNavigate("/buscar/" + mySearch, { replace: true });
  };

  return (
    <nav className="nav">
      <ul className="menu">
        <li>
          <div>
            <Link to="/articulos">
              My <FontAwesomeIcon icon={faBlog} /> log
            </Link>
          </div>
        </li>

        <li>
          <div className="submenu">
            <ul>
              <li>
                <NavLink to="/inicio">Inicio</NavLink>
              </li>

              <li>
                <NavLink to="/articulos">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/crear">Crear articulo</NavLink>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div className="searchNav">
            <form onSubmit={goSearch}>
              <input type="text" name="searchFile" placeholder="Buscar..." />

              <button type="submit" id="search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
        </li>
      </ul>
    </nav>
  );
};
