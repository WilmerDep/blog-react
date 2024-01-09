import { useState, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { Petition } from "../../helpers/Petition";
import { Global } from "../../helpers/Global";
import { useParams } from "react-router-dom";

export const Edit = () => {
  const { form, changed } = useForm({});
  const [result, setResult] = useState("no_enviado");
  const [article, setArticle] = useState({});
  const [error, setError] = useState(null); // Nuevo estado para manejar errores
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
      setError(
        "Ha ocurrido un error al obtener los artículos. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  const editArticle = async (e) => {
    e.preventDefault(); // QUITA EL REFRESH DEL FORMULARIO

    // RECOGIENDO DATOS DEL FORMULARIO
    let newArticle = form;

    //GUARDAR DATOS EN EL BACKEND CON AJAX
    const { datas } = await Petition(
      Global.url + "article/" + params.id,
      "PUT",
      newArticle
    );

    if (datas.status === "success") {
      setResult("guardado");

      // SUBIR IMAGEN
      const fileInput = document.querySelector("#file");
      const formData = new FormData();

      formData.append("file", fileInput.files[0]);
      const upload = await Petition(
        Global.url + "subir-imagen/" + datas.article._id,
        "POST",
        formData,
        true
      );

      if (upload.status === "success") {
        setResult("guardado");
      }
    } else {
      setResult("error");
    }

    console.log(datas);
  };

  return (
    <>
      <div className="card">
        <h3>Editar Articulos: {article.title}</h3>
        <strong>
          {result === "guardado" ? "Articulo guardado con Éxito" : ""}
        </strong>
        <strong>
          {result === "error"
            ? "Error al guardar el Articulo, el título o contenido debe superar los 3 caracteres"
            : ""}
        </strong>
        {error && <h2>{error}</h2>}

        <form onSubmit={editArticle}>
          {/* Resto del formulario permanece sin cambios */}
          <div className="form-group">
            <label htmlFor="title">Titulo</label>
            <input
              onChange={changed}
              type="text"
              name="title"
              placeholder="Titulo"
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
              placeholder="Contenido del Articulo"
              cols="30"
              rows="10"
              defaultValue={article.content}
            />
          </div>

          <div className="form-group">
            <label htmlFor="file0">Imagen Destacada</label>
            <div className="imageContentSingleArticle">
              {article.image ? (
                <img
                  src={
                    article.image !== "default.png"
                      ? Global.url + "imagen/" + article.image
                      : "https://codersera.com/blog/wp-content/uploads/2019/12/Learn-Reactjs.jpeg"
                  }
                  alt="IMAGEN DE BIENVENIDA"
                />
              ) : (
                <p>Error al cargar la imagen</p>
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
