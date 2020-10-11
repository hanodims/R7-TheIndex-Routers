import React from "react";
import { Link } from "react-router-dom";

const BookCard = (props) => {
  const book = props.book;
  const bookTitle = `${book.title}`;
  //  <Link to={`/authors/${author.id}`} className="card"> </Link>
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card-body">
        <h5 className="card-title">
          <span>{bookTitle}</span>
        </h5>
        <button className="btn" style={{ backgroundColor: book.color }} />
      </div>
    </div>
  );
};

export default BookCard;
