import React from "react";

const Contact = () => {
  return (
    <div className="contactpage">
      <hr />
      <div className="contactbody">
        <div className="contactcard">
          <h1>PUBLICIST:</h1>
          <h2>Gayle Jones</h2>
          <ul>
            <li>Publishing Company</li>
            <li>555 Main Street</li>
            <li>Suite 100</li>
            <li>Kansas City, MO 11111</li>
          </ul>
          <br />
          <ul>
            <li>phone:</li>
            <li>email:</li>
            <li>website url</li>
          </ul>
        </div>
        <div className="contactcard">
          <h1>AGENT:</h1>
          <h2>Essie Harris</h2>
          <ul>
            <li>Company</li>
            <li>555 Main Street</li>
            <li>Suite 100</li>
            <li>Kansas City, MO 11111</li>
          </ul>
          <br />
          <ul>
            <li>phone:</li>
            <li>email:</li>
            <li>website url</li>
          </ul>
        </div>
        <div className="contactcard">
          <h1>SPEAKING ENGAGEMENTS:</h1>
          <h2>Robyn Osborne</h2>
          <ul>
            <li>Management Company</li>
            <li>555 Main Street</li>
            <li>Suite 100</li>
            <li>Kansas City, MO 11111</li>
          </ul>
          <br />
          <ul>
            <li>phone:</li>
            <li>email:</li>
            <li>website url</li>
          </ul>
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
