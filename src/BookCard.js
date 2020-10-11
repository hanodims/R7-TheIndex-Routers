import React from "react";
import { Link } from "react-router-dom";

const BookCard = (props) => {
  const book = props.book;
  const bookTitle = `${book.title}`;
  const authors = book.authors.map((author) => (
    <div key={author.id}>
      {" "}
      <Link to={`/authors/${author.id}`}>{author.name}</Link>
    </div>
  ));
  //  <Link to={`/authors/${author.id}`}> </Link>
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <span>{bookTitle}</span>
          </h5>
          <h5 className="card-title">
            <span>Authors:</span>
          </h5>{" "}
          <h5 className="card-title">
            <span>{authors}</span>
          </h5>
          <Link to={`/authors/${book.color}`}>
            <button className="btn" style={{ backgroundColor: book.color }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
