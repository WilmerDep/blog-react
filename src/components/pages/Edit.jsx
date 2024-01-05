import { useState, useEffect } from "react"; // IMPORTANDO EL HOOK USESTATE
import { useForm } from "../../hooks/useForm"; //IMPORTANDO EL HOOK PERSONALIZADO
import { Petition } from "../../helpers/Petition";
import { Global } from "../../helpers/Global";
import { useParams } from "react-router-dom";

export const Edit = () => {
  const { form, submited, changed } = useForm({});
  const [result, setResult] = useState("no_enviado");
  const [article, setArticle] = useState([]);
  const params = useParams();

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    try {
      const { datas } = await Petition(
        Global.url + "article/" + params.id,
        "GET"
      );

      if (datas.status === "success") {
        setArticle(datas.article);
      } else {
        throw new Error("La respuesta de la API no indica éxito");
      }
    } catch (error) {
      console.error("Error al obtener artículos:", error);
      // Aquí puedes agregar lógica adicional para manejar el error, como mostrar un mensaje al usuario.
      <h2>Ha currido un error</h2>;
    }


  }
  
  const editArticles = async (e)  => {
    e.preventDefault(); // QUITA EL REFRESH DEL FORMULARIO
  
    // RECOGIENDO DATOS DEL FORMULARIO
    let newArticle = form;
    
    //GUARDAR DATOS EN EL BACKEND CON AJAX
    const {datas} = await Petition(Global.url+"article/"+ params.id, "PUT", newArticle);
    
    if (datas.status === "success") {
      setResult("guardado");

      // SUBIR IMAGEN
      const fileInput = document.querySelector("#file");
      const formData = new FormData();

      formData.append('file', fileInput.files[0])
      const upload = await Petition(Global.url+"subir-imagen/"+datas.article._id, "PUT", formData, true);
    
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
        <h3>Editar Articulos: {article.title}</h3>
        <strong>{result == "guardado" ? "Articulo guardado con Exito" : ""}</strong>
        <strong>{result == "error" ? "Error al guardar el Articulo, el titulo  o contenido debe superar los 3 caracteres" : ""}</strong>

        <form onSubmit={editArticles}>
          <div className="form-group">
            <label htmlFor="title">Titulo</label>
            <input
              onChange={changed}
              type="text"
              name="title"
              placeholder="Editar Titulo"
              id="title"
              defaultValue={article.title}
            />
          </div>

          <div className="form-group">
            <label htmlFor="content"> Descrición</label>
            <textarea
              onChange={changed}
              name="content"
              id="content"
              placeholder="Editar el Contenido del Articulo"
              cols="30"
              rows="10"
              defaultValue={article.content}
            />
          </div>

          <div className="form-group">
            <label htmlFor="file0">Imagen Destacada</label>

            <div className="imageContentSingleArticle">
        {article.image !== "default.png" && (
          <img
            src={Global.url + "imagen/" + article.image}
            alt="IMAGEN DE BIENVENIDA"
          />
        )}

        {article.image === "default.png" && (
          <img
            src="https://codersera.com/blog/wp-content/uploads/2019/12/Learn-Reactjs.jpeg"
            alt="IMAGEN DE BIENVENIDA"
          />
        )}
      </div>

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
