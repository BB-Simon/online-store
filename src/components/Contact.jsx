import React from "react";
import Title from "./Title";

const Contact = () => {
  return (
    <div className="container my-5">
      <Title name="contact" title="us" />
      <form>
        <div className="row my-3">
          <div className="col-md-6 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="col-md-6 mb-2">
            <input
              type="email"
              className="form-control"
              placeholder="Your Emale"
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-6 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Your Phone"
            />
          </div>
          <div className="col-md-6 mb-2">
            <input
              type="email"
              className="form-control"
              placeholder="Your Address"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="form-control"
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary my-2">
          send <i class="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default Contact;
