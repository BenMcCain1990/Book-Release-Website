import React from "react";

const Contact = () => {
  return (
    <div className="contactpage">
      <hr />
      <div className="contactbody">
        <div className="contactcard">
          <h1>PUBLICIST:</h1>
          <h2>Publicist Name</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            omnis porro quae? Fugit reprehenderit quisquam molestiae aliquid
            aut, quos nostrum.
          </p>
          <br />
          <p>Publicist Contact Info</p>
        </div>
        <div className="contactcard">
          <h1>AGENT:</h1>
          <h2>Agent Name</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            exercitationem, laudantium saepe cum impedit corrupti aliquam! At
            facere pariatur expedita.
          </p>
          <br />
          <p>Agent Contact Info</p>
        </div>
        <div className="contactcard">
          <h1>SPEAKING ENGAGEMENTS:</h1>
          <h2>Agent Name</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            maiores maxime explicabo, totam eos dolorum cum facilis ad
            accusantium magni!
          </p>
          <br />
          <p>Speaking Agent Contact Info</p>
        </div>
      </div>
      <div className="subscribe">
        <h2 className="subscribetitle">Let's keep in touch</h2>
        <p className="subscribecopy">
          Subscribe to keep up with fresh news and exciting updates. We promise
          not to spam you!
        </p>
        <div className="form">
          <input
            type="email"
            className="formemail"
            placeholder="Enter your email address"
          />
          <button className="formbutton">Send</button>
        </div>
        <div className="notice">
          <input type="checkbox" />
          <span className="noticecopy">
            I agree to my email address being stored and uses to recieve monthly
            newsletter.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
