import logo from "../../images/f-logo.svg";

// import { faFacebook, faInstagram, faYoutube, faGoogle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





const Footer = () => {
  return (
    <>
        <footer className=" text-white pt-5 pb-4" style={{backgroundColor:'#395c6b'}}>
        <div className="container text-center text-md-start">
          <div className="row text-center text-md-start">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <img src={logo} alt="MovieDb Img" />
            <button type="button" class="btn btn-success p-2 mt-3" style={{backgroundColor:('#f0e7d8')}}>
            <h3 className="text-success">Hi! Arjun</h3>
            </button>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h3 className=" mb-4 font-weight-bold  text-warning">THE BASICS</h3>
              <p>About TMDB</p>
              <p>Contact Us!</p>
                <p>Support Forums</p>
                <p>API</p>
                
            </div>
            <div className="col-md-3 col-lg-2 mx-auto mt-3">
              <h3 className=" mb-4 font-weight-bold text-warning">GET INVOLVED</h3>
              <p>Contribution Bible</p>
                <p>Add New Movie</p>
                <p>Add New TV Show</p>
            </div>
            <div className="col-md-3 col-lg-2 mx-auto mt-3">
              <h3 className="mb-4 font-weight-bold text-warning">COMMUNITY</h3>
              <p>Guidelines</p>
              <p>Discussions</p>
              <p>LeaderBoard</p>
              <p>Twitter</p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h3 className=" mb-4 font-weight-bold text-warning">LEGAL</h3>
              <p>Terms of Use</p>
              <p>API Terms of Use</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <hr className="mb-4" />
          <div className="row align-items-center">
            <div className="col-md-7 col-lg-8 text-centers">
              <p>Copyright <span>©</span>2023 All rights reserved by:
                <a href="#" className="text-decoration-none text-warning">
                  <strong>Arjun Pundir</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;