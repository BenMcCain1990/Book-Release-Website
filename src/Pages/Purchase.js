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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro at
            fuga eum esse delectus voluptatum dolorum quo aliquid dignissimos
            non, quod debitis, incidunt beatae officia reiciendis accusantium
            magni exercitationem cum quaerat qui veniam. Tenetur excepturi omnis
            deleniti impedit eum voluptas, modi numquam, dolore maiores
            similique praesentium possimus laboriosam hic delectus iste
            consequuntur. Nulla natus, commodi, ipsam reprehenderit officiis
            assumenda, cum ex molestias autem eos tempore aliquam quasi
            recusandae libero nihil repellendus et obcaecati adipisci mollitia
            esse ipsum quia odit perferendis. Cum assumenda reprehenderit minima
            labore. Provident rem ipsum aliquam dolorem quia asperiores ea
            reprehenderit, nisi, quidem consequuntur, adipisci in illum?
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
