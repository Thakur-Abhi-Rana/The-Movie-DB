import { useGlobalContext } from "../context";
import Movie from "./Movie";
import Loading from "./Loading";
import Pagination from "./Pagination";

const MovieList = () => {
  const { movies, isLoading, searchTerm } = useGlobalContext();
  if (isLoading) {
    return <Loading />;
  } else if (!searchTerm) {
    return (
      <section style={{ height: "75vh" }}>
        <h1>Search movies!</h1>
      </section>
    );
  } else if (movies.length == 0) {
    return (
      <section style={{ height: "75vh" }}>
        <h1>No Movie Found!</h1>
      </section>
    );
  } else {
    return (
      <section>
        <div className="row gy-4 justify-content-center ">
          {movies.map((movie) => {
            const { id, title, release_date, poster_path, overview } = movie;
            return (
              <Movie
                key={movie.id}
                {...{ id, title, release_date, poster_path, overview }}
              />
            );
          })}
        </div>
        <Pagination />
      </section>
    );
  }
};

export default MovieList;
