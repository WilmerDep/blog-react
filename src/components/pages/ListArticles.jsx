import { Link } from "react-router-dom";

export const ListArticles = ({ articles }) => {
  return articles.map((article) => {
    return (
      <div key={article._id} className="cardArticle">
        <div className="imageContentArticle">
          {article.image && (
            <img
              src="https://codersera.com/blog/wp-content/uploads/2019/12/Learn-Reactjs.jpeg"
              alt="IMAGEN DE BIENVENIDA"
            />
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
  });
};
