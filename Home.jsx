import MovieList from "../components/MovieList";
import Searchbar from "../components/Searchbar";

const Home = () => {
  return (
    <main className="container">
      <Searchbar />
      <MovieList />
    </main>
  );
};

export default Home;
