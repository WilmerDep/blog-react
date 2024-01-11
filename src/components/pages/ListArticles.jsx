import { Link } from "react-router-dom";
import { Global } from "../../helpers/Global";
import { Petition } from "../../helpers/Petition";


const MaxLengthText = ({ text, maxLength }) => {
  const truncatedText = text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  return <>{truncatedText}</>;
};

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
  };

  return articles.map((article) => (
    <div key={article._id} className="cardArticle">
      <div className="imageContentArticle">
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
      <div className="texContentArticle">
        <h3><MaxLengthText text={article.title} maxLength={30} /></h3>
        <p><MaxLengthText text={article.content} maxLength={80} /></p>
        {/* Cambié el valor de maxLength a 100, puedes ajustarlo según tus necesidades */}
        <div className="buttons">
          <Link to={"/articulo/" + article._id} className="button">
            Ver artículo
          </Link>
          <button className="button" onClick={() => deleteArticle(article._id)}>
            Borrar
          </button>
        </div>
      </div>
    </div>
  ));
};