import BookCover from "../Images/BookCover.png";
import kiley from "../Images/kiley.png";

const Body = () => {
  return (
    <div className="Body">
      <div>
        <img className="Cover" src={BookCover} alt="Book Cover" />
      </div>
      <div className="text">
        <h1>Book Title</h1>
        <br />
        <h2>On Sale Now!</h2>
        <br />
        <br />
        <hr />
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          illo corrupti repellendus laudantium? Aperiam perferendis quaerat
          molestiae, deserunt iusto ipsam ipsum veniam non eligendi rerum magnam
          natus, facilis nesciunt blanditiis? Deleniti optio illum possimus
          ipsum, non vel amet quis placeat, vitae maiores praesentium nulla
          culpa id, consequuntur cumque dignissimos corporis!
        </p>
        <br />
        <hr />
        <br />
      </div>
      <div>
        <img className="AuthorImg" src={kiley} alt="Author's Portrait" />
      </div>
    </div>
  );
};

export default Body;
