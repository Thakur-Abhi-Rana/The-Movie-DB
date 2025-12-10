import ReactPaginate from "react-paginate";
import { useGlobalContext } from "../context";

const Pagination = () => {
  const { totalPages, setPageNo, pageNo } = useGlobalContext();

  const nextPage = () => {
    if (pageNo < totalPages) {
      setPageNo(pageNo + 1);
    }
  };
  const prevPage = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };
  return (
    <nav className="my-5">
      <ul className="pagination justify-content-center">
        <li className="list-item">
          <button className="page-link" onClick={prevPage}>
            Previous
          </button>
        </li>
        {/* <li className="list-item">
          <button className="page-link active">1</button>
        </li>
        <li className="list-item">
          <button className="page-link">2</button>
        </li>
        <li className="list-item">
          <button className="page-link">3</button>
        </li> */}
        <li className="list-item">
          <button className="page-link" onClick={nextPage}>
            Next
          </button>
        </li>
      </ul>

      {/* <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={1}
        onPageChange={handlePageChange}
        containerClassName={"pagination justify-content-center"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        previousLabel={"<<"}
        nextLabel={">>"}
      /> */}
    </nav>
  );
};

export default Pagination;
