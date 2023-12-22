import { useState } from "react"; // IMPORTANDO EL HOOK USESTATE
import { useForm } from "../../hooks/useForm"; //IMPORTANDO EL HOOK PERSONALIZADO
import { Petition } from "../../helpers/Petition";
import { Global } from "../../helpers/Global";

export const Create = () => {
  const { form, submited, changed } = useForm({});
  const [result, setResult] = useState("no_enviado");

  const saveArticles = async (e)  => {
    e.preventDefault(); // QUITA EL REFRESH DEL FORMULARIO
  
    // RECOGIENDO DATOS DEL FORMULARIO
    let newArticle = form;
    
    //GUARDAR DATOS EN EL BACKEND CON AJAX
    const {datas} = await Petition(Global.url+"create", "POST", newArticle);
    
    if (datas.status === "success") {
      setResult("guardado");

      // SUBIR IMAGEN
      const fileInput = document.querySelector("#file");
      const formData = new FormData();

      formData.append('file', fileInput.files[0])
      const upload = await Petition(Global.url+"subir-imagen/"+datas.article._id, "POST", formData, true);
    
      if (upload.status === "success") {
        setResult("guardado");
      }

    }else{
        setResult("error");
      }
    
    console.log(datas);
   
  }

  return (
    <>
      <div className="card">
        <h3>Crear Articulos</h3>
        <strong>{result == "guardado" ? "Articulo guardado con Exito" : ""}</strong>
        <strong>{result == "error" ? "Error al guardar el Articulo, el titulo  o contenido debe superar los 3 caracteres" : ""}</strong>

        <form onSubmit={saveArticles}>
          <div className="form-group">
            <label htmlFor="title">Titulo</label>
            <input
              onChange={changed}
              type="text"
              name="title"
              placeholder="Titulo"
              id="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="content"> Descrición</label>
            <textarea
              onChange={changed}
              name="content"
              id="content"
              placeholder="Contenido del Articulo"
              cols="30"
              rows="10"
            />
          </div>

          <div className="form-group">
            <label htmlFor="file0">Imagen Destacada</label>
            <input type="file" id="file" name="file" />
          </div>

          <div className="form-group">
            <input type="submit" value="Guardar" id="save" />
          </div>
        </form>
      </div>
    </>
  );
};
