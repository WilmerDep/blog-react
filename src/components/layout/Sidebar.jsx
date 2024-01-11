import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Sidebar = () => {
  const [search, setSearch] = useState("");

  const searchNavigate = useNavigate();

  const goSearch = (e) => {
    e.preventDefault();
    let mySearch = e.target.searchFile.value;
    searchNavigate("/buscar/" + mySearch, { replace: true });
  };

  return (
    <aside className="side">
      <div className="search">
        <form onSubmit={goSearch}>
          <input type="text" name="searchFile"  placeholder="Buscar..." />
          <input  type="submit" id="search" value="Buscar"  /> 
        </form>
      </div>
    </aside>
  );
}
