import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
          <input type="text" name="searchFile"  placeholder="Buscar..."/>
          <input type="submit" id="search" value="Buscar" />
        </form>
      </div>

        </li>
      </ul>
    </nav>
  );
};
