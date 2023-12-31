import { Link } from "react-router-dom";
import { Global } from "../../helpers/Global";
import { Petition } from "../../helpers/Petition";

export const ListArticles = ({ articles, setArticles }) => {
  const deleteArticle = async (id) => {
    try {
      const { datas } = await Petition(Global.url + "article/" + id, "DELETE");
      console.log(datas);

      if (datas.status === "success" && setArticles) {

        let articleUpdate = articles.filter((article) => article._id !== id);
        setArticles(articleUpdate); // Actualiza el estado global
      }
    } catch (error) {
      console.error("Error al borrar el artículo:", error);
    }
  }

  return articles.map((article) => (
    <div key={article._id} className="cardArticle">
      <div className="imageContentArticle">
        {article.image && article.image !== "default.png" && (
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
      <div className="texContentArticle">
        <h3>{article.title}</h3>
        <p>{article.content}</p>
        <div className="buttons">
          <Link to={"/articulo/"+ article._id} className="button">
            Ver artículo
          </Link>
          <button className="button" onClick={() => deleteArticle(article._id)}>
            Borrar
          </button>
        </div>
      </div>
    </div>
  ));
}
