import { Link } from "react-router-dom";
import { Tooltip } from "bootstrap";
const Movie = (props) => {
  const { id, title, release_date, poster_path, overview } = props;
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <article className="card h-100 shadow bg-body-tertiary">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title + " image"}
        />
        <div className="card-body">
          <h6 className="card-title">
            <Link
              to={`/movie/${id}`}
              className="text-body"
              style={{ textDecoration: "none" }}
            >
              {title.length > 15
                ? `${title.slice(0, 16).trim()}...`
                : `${title}`}
            </Link>
          </h6>
          <p className="card-text">{release_date}</p>
        </div>
      </article>
    </div>
  );
};

export default Movie;
