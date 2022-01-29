import React from "react";
import BookCover from "../Images/BookCover.png";

const Blog = () => {
  return (
    <div className="purchasepage">
      <div className="purchaseheader">
        <h1>Where To Buy</h1>
      </div>
      <hr />
      <div className="purchasebody">
        <img src={BookCover} alt="Book Cover" />
        <div className="purchaselinks">
          <h2>Book Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            nostrum nihil, pariatur repellat blanditiis recusandae, possimus
            laborum minima accusantium quod, voluptatum eum veritatis
            voluptatem? Quos ut at nobis nihil nesciunt!
          </p>
          <div className="links">
            <a href="https://www.amazon.com/" target="_blank">
              Amazon
            </a>
            <a href="https://www.barnesandnoble.com/" target="_blank">
              Barnes & Noble
            </a>
            <a href="https://www.apple.com/apple-books/" target="_blank">
              Apple Books
            </a>
            <a href="https://bookshop.org/" target="_blank">
              Your Local Bookstore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
