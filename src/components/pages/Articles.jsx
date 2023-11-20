
import { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import { Petition } from "../../helpers/Petition";
import { ListArticles } from "./ListArticles";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    try {
      const { datas, loading } = await Petition(Global.url + "articles", "GET");

      if (datas.status === "success" && loading !== true) {
        setArticles(datas.article);
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
      {/*  <div className="backtohome">
        <Link to="/" className="button">
        Volver al Inicio
        </Link>
      <h3 className="loadingText">
      </div>*/}

      {loading ? (
        "Cargando..." || Array.isArray(articles) || articles.length >= 1
      ) : (
        <ListArticles articles={articles} />
      )}
    </>
  );
};
