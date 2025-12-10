

const Contact = () => {


  return (
  <>
    <div className="container">
        <h2>Contact Us</h2>
        <form >
          <div className="form-group">
            <label htmlFor="nameInput">Name</label>
            <input type="text" className="form-control" id="nameInput" placeholder="Enter your name" />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="emailInput">Email address</label>
            <input type="email" className="form-control" id="emailInput" placeholder="Enter your email" />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="messageInput">Message</label>
            <textarea className="form-control" id="messageInput" rows="5" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </form>
      </div>
  </>
  );
};

export default Contact;
