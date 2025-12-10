import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const api_key = "2eb41dac1282d63538c8800359dea713";
const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}`;
const base_url = `https://api.themoviedb.org/3/search/movie`;
const query = "&query=";
const page = "&page=";

const AppContext = createContext();

export const AppProvide = ({ children }) => {
  // STATE VALUES
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [totalPages, setTotalPages] = useState(0);
  const [pageNo, setPageNo] = useState(1);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (pageParameter) => {
    setIsLoading(true);

    try {
      const response = await axios.get(`${base_url}`, {
        params: {
          api_key: api_key,
          query: searchTerm,
          page: pageParameter,
        },
      });
      // console.log(response);
      setTotalPages(response.data.total_pages);
      setMovies(response.data.results);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovies(pageNo);
  }, [searchTerm, pageNo]);

  return (
    <AppContext.Provider
      value={{
        movies,
        isLoading,
        searchTerm,
        setSearchTerm,
        pageNo,
        setPageNo,
        totalPages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
