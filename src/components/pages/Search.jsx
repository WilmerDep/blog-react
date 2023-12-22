import { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import { Petition } from "../../helpers/Petition";
import { ListArticles } from "./ListArticles";
import { useParams } from "react-router-dom";

export const Search = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    getArticle();
  }, []);

  useEffect(() => {
    getArticle();
  }, [params]);

  const getArticle = async () => {
    try {
      const { datas, loading } = await Petition(
        Global.url + "buscar/" + params.search,
        "GET"
      );

      if (datas.status === "success" && loading) {
        setArticles(datas.article);
      } else {
        setArticles([]);
        throw new Error("La respuesta de la API no indica éxito");
      }
    } catch (error) {
      console.error("Error al obtener artículos:", error);
      setError(
        "Ha ocurrido un error al obtener los artículos. Por favor, inténtalo de nuevo más tarde."
      );
    }

    setLoading(false);
  };

  return (
    <>
      {error ? (
        <h2>{error}</h2>
      ) : loading ? (
        "Cargando..." || Array.isArray(articles) || articles.length >= 1
      ) : (
        <ListArticles articles={articles} setArticles={setArticles} />
      )}
    </>
  );
};
