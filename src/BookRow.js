import React from "react";
import { Link } from "react-router-dom";

const BookRow = (props) => {
  const book = props.book;
  const authors = book.authors.map((author) => (
    <div key={author.name}>{author.name}</div>
  ));
  return (
    <tr>
      <Link to={`/books/${book.id}`} className="card">
        <td>{book.title}</td>
        <td>{authors}</td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </Link>
    </tr>
  );
};

export default BookRow;
