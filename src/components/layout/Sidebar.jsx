import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const [search, setSearch] = useState("");

  const searchNavigate = useNavigate();

  const goSearch = (e) =>{
    e.preventDefault();
    let mySearch = e.target.searchFile.value;
    searchNavigate("/buscar/"+mySearch, {replace: true});
  }
  
  return (
      <aside className="side">
        <div className="search">
          <form onSubmit={goSearch}>
            <input type="text" name="searchFile"/>
          <input type="submit" id="search" value="Buscador" />
          </form>
        </div>

       {/* <div className="add">
          <h3>Anadir Articulos</h3>

          <form>
            <input type="text" name="title" placeholder="Titulo" id="title" />
            <textarea
              name="description"
              id="description"
              placeholder="Descripcion"
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" value="Guardar" id="save" />
          </form>
        </div>
         */}
      </aside>
   
  );
};
