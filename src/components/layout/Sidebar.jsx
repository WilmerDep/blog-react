export const Sidebar = () => {
  return (
      <aside className="side">
        <div className="search">
          <form action="">
            <input type="text" id="searchFile" />
          </form>
          <button id="search">Buscador</button>
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
