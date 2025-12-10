import myImg from "../../images/tmdb.svg";
const About = () => {
  return (
  <>
  <main>
    <article className="container">
    <div>
    <img src={myImg} alt="image contain" />
    </div>
    <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end mt-3 fw-semibold lh-base" style={{fontFamily: "sans-serif"}}>
      <p>The movie database (often referred to as a movie or film database) is a collection of information about movies, including details such as titles, release dates, genres, cast and crew information, plot summaries, and ratings. These databases are used by movie enthusiasts, industry professionals, and various platforms and websites to organize and provide information about movies.</p>
      <p>The Movie Database (TMDb): TMDb is a community-driven database that allows users to contribute and edit information about movies. It provides details about films, TV shows, and people involved in the industry. TMDb's API (Application Programming Interface) is often used by developers to access movie data for their applications.</p>
      <p>These databases serve as valuable resources for movie lovers, allowing them to explore and discover information about their favorite films, actors, and directors. They also aid in research, analysis, and decision-making for filmmakers, producers, and industry professionals.</p>
    </div>
    </article>
  </main>
  </>);
};

export default About;
