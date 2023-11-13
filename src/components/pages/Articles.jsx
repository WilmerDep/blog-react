import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";

export const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    const url = Global.url+"articles";

    try {
      let petition = await fetch(url, {
        method: "GET",
      });

      if (petition.status !== 200) {
        throw new Error("La solicitud a la API falló");
      }

      let data = await petition.json();

      if (data.status === "success") {
        setArticles(data.article);
      } else {
        throw new Error("La respuesta de la API no indica éxito");
      }
    } catch (error) {
      console.error("Error al obtener artículos:", error);
      // Aquí puedes agregar lógica adicional para manejar el error, como mostrar un mensaje al usuario.
      <h2>Ha currido un error</h2>;
    }
  };

  return (
    <>
      <div className="backtohome">
        <Link to="/" className="button">
          Volver al Inicio
        </Link>
      </div>

      {Array.isArray(articles) || articles.length >= 1 ? (
        articles.map((article) => {
          return (
            <div key={article._id} className="cardArticle">
              <div className="imageContentArticle">
                {article.image && (
                  <img src={article.image} alt="IMAGEN DE BIENVENIDA" />
                )}
              </div>
              <div className="texContentArticle">
                <h3>{article.title}</h3>
                <p>{article.content}</p>
                <Link to="/articulos" className="button">
                  Ver artículo
                </Link>
              </div>
            </div>
          );
        })
      ) : (
        <p>No hay artículos disponibles.</p>
      )}
    </>
  );
};
