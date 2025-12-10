import { useGlobalContext } from "../context";

const Searchbar = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <form className="row justify-content-center my-5">
      <input
        className="form-control w-25"
        placeholder="Search movie"
        type="text"
        value={searchTerm}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </form>
  );
};

export default Searchbar;
