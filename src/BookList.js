import React, { useState } from "react";

// Components
import BookCard from "./BookCard";
import SearchBar from "./SearchBar";

const BookList = (props) => {
  const [query, setQuery] = useState("");

  const filteredBooks = props.books.filter((book) =>
    `${book.title}`.toLowerCase().includes(query.toLowerCase())
  );

  const booksCards = filteredBooks.map((book) => (
    <BookCard key={book.id} book={book} />
  ));

  return (
    <div>
      <h3>Books</h3>
      <SearchBar handleFilter={setQuery} />
      <div className="row">{booksCards}</div>
    </div>
  );
};

export default BookList;
