const Contact = () => {
  return (
    <div id="contact" className="container mb-4 rounded-3 bg-grey p-3">
      <h2 className="text-center mb-4">CONTACT</h2>
      <div className="row">
        <div className="col-sm-5">
          <p>Contact us and well get back to you within 24 hours.</p>
          <p>
            <i className="bi bi-geo-alt-fill"></i> Chicago, US
          </p>
          <p>
            <i className="bi bi-phone"></i> +00 1515151515
          </p>
          <p>
            <i className="bi bi-envelope"></i> myemail@something.com
          </p>
        </div>
        <div className="col-sm-7">
          <form action="">
            <div className="row">
              <div className="col-sm-6 ">
                <input
                  className="form-control mb-3"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  required=""
                />
              </div>
              <div className="col-sm-6 ">
                <input
                  className="form-control mb-3"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required=""
                />
              </div>
            </div>
            <textarea
              className="form-control "
              id="comments"
              name="comments"
              placeholder="Comment"
              rows="5"
            ></textarea>
            <br />
            <div className="row">
              <div className="col-sm-12 ">
                <button className="btn btn-secondary " type="submit">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
