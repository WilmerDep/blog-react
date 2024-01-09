import { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import { Petition } from "../../helpers/Petition";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export const SingleArticle = () => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    try {
      const { datas, loading } = await Petition(
        Global.url + "article/" + params.id,
        "GET"
      );

      if (datas.status === "success" && loading !== true) {
        setArticle(datas.article);
      } else {
        throw new Error("La respuesta de la API no indica éxito");
      }
    } catch (error) {
      console.error("Error al obtener artículos:", error);
      // Aquí puedes agregar lógica adicional para manejar el error, como mostrar un mensaje al usuario.
      <h2>Ha currido un error</h2>;
    }

    setLoading(false);
  };

  return (
    <>
      {loading ? (
        "Cargando..." || Array.isArray(article) || article.length >= 1
      ) : (
        <>
          <div className="card">
            <Link to={"/editar/" + article._id} className="button">
              Editar artículo
            </Link>
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
            <h1>{article.title}</h1>
            <p>{article.content}</p>
            <span>{article.date}</span>
            <div className="backtohome">
              <Link to="/articulos" className="button">
                Volver al Blog
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};
