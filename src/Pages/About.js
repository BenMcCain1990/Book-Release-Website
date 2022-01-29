import React from "react";
import Author from "../Images/kiley.png";

const About = () => {
  return (
    <div className="aboutpage">
      <div className="aboutheader">
        <h1>Author's Name</h1>
      </div>
      <hr className="topline" />
      <div className="aboutbody">
        <img src={Author} alt="Portrait of Author" />
        <h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo eius
          amet quam architecto velit optio laborum accusantium numquam
          voluptatem inventore recusandae earum laboriosam, magni excepturi ut
          possimus provident reprehenderit odio ipsum, atque fuga soluta
          corporis. Rerum omnis nisi alias, doloribus tempora dolorum velit odio
          natus laudantium suscipit nulla consequuntur in. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Nemo eius amet quam architecto
          velit optio laborum accusantium numquam voluptatem inventore
          recusandae earum laboriosam, magni excepturi ut possimus provident
          reprehenderit odio ipsum, atque fuga soluta corporis. Rerum omnis nisi
          alias, doloribus tempora dolorum velit odio natus laudantium suscipit
          nulla consequuntur in.
          <hr className="bottomline" />
        </h2>
      </div>
    </div>
  );
};

export default About;
