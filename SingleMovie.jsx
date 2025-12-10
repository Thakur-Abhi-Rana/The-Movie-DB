import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  
  const [movieDetails, setMovieDetails]=useState({});
  const [loading,setLoading]=useState(true);
  const [error,SetError]=useState(false);
  console.log(movieDetails);

  const api_key = "8e68e91c465477a7fb8dd5b68fdf19fc";
  const url="https://api.themoviedb.org/3/movie/";
  const { id } = useParams();

  const fetchMovieDetails = async()=>{
    setLoading(true);
    try{
      const response = await fetch(`${url}${id}?api_key=${api_key}`);
      const data =await response.json();
      setMovieDetails(data);
      setLoading(false);
    }
    catch(e){
      console.log(e);
      setLoading(false);
      SetError(true);
    }
  } ;

  useEffect(()=>{
    fetchMovieDetails();
  },[]);
 
 const {
  adult,
  backdrop_path,
  belongs_to_collection,
  budget,
  genres,
  homepage,
  original_language,
  original_title,
  overview,
  popularity,
  poster_path,
  production_companies,
  production_countries,
  release_date,
  revenue,
  runtime,
  spoken_language,
  status,
  tagline,
  title,
  vote_average,
  vote_count
 }=movieDetails;
  return(
    
    <>
    <article className="" 
    style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${backdrop_path})`,
    backgroundRepeat:'no-repeat', 
    backgroundSize:"cover",
    backgroundPosition:"center center",
    backgroundBlendMode:"overlay"}}>
      <main className="row container mx-auto" style={{color:"#ffffff"}}>
      
        <div className="col-12 col-md-4" >
          <div className="my-4">
            <img className="card-img-top rounded-4 shadow p-1 mb-1 bg-white" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
            
            <img src= {`${homepage}`} alt="" />
          </div>
        </div>
        <div className="col-12 col-md-8 ">
          <h3 className="my-4 card-title fs-1">{title}  </h3>
          <p className="fs-4">{release_date}  <span> {vote_average}</span> <span>{runtime}</span></p>
          <p style={{color:"#01d277", fontSize:"2rem"}}>{tagline}</p>
          <p style={{fontSize:"1.3rem"}}>{overview}</p>
        </div>
        <div className="mt-5">
          <h1>Movie Facts</h1>
          <p style={{color:"#01d277",}} className="fs-3">Original_Title <br /><span style={{color:"#ffffff"}}>{original_title}</span></p>
          <p style={{color:"#01d277",}} className="fs-3">Original Language <br /><span style={{color:"#ffffff"}}>{original_language}</span></p>
        <p style={{color:"#01d277",}} className="fs-3">Status <br /><span style={{color:"#ffffff"}}>{status}</span></p>
        <p style={{color:"#01d277",}} className="fs-3">Release Date <br /><span style={{color:"#ffffff"}}>{release_date}</span></p>
        <p style={{color:"#01d277",}} className="fs-3">Rating <br /><span style={{color:"#ffffff"}}>{vote_average}</span></p>
        <p style={{color:"#01d277",}} className="fs-3">Runtime <br /><span style={{color:"#ffffff"}}>{runtime} min</span></p>
        <p style={{color:"#01d277",}} className="fs-3">Budget <br /><span style={{color:"#ffffff"}}>${budget}</span></p>
        <p style={{color:"#01d277",}} className="fs-3">Revenue <br /><span style={{color:"#ffffff"}}>${revenue}</span></p>
        </div>
      </main>
    </article>
    </>
  ) 
};

export default SingleMovie;
