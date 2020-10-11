import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Components
import BookList from "./BookList";
import Loading from "./Loading";
const BookColors = (props) => {
  const { BookColor } = useParams();

  const filteredBooks = props.books.filter((book) =>
    `${book.color}`.toLowerCase().includes(BookColor)
  );

  return <BookList books={filteredBooks} />;
};

export default BookColors;
