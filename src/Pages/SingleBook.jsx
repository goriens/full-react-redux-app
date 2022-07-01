import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../Redux/AppReducer/action";

export const SingleBook = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.appReducer.books);
  const [currentBook, setCurrentBook] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (books?.length === 0) {
      dispatch(getBooks());
    }
  }, [dispatch, books?.length]);

  useEffect(() => {
    if (id) {
      const temp = books?.find((book) => book.id === Number(id));
      temp && setCurrentBook(temp);
    }
  }, [books, id]);
  console.log(currentBook);

  return (
    <div>
      <h2>{currentBook?.author}</h2>
      <h1>{currentBook?.cover_photo}</h1>
      <p>Category: {currentBook?.category}</p>
      <p>Release Year: {currentBook?.release_year}</p>
      <p>Number of Chapter: {currentBook?.no_of_chapters}</p>
      <button>
        <Link to={`/book/${currentBook.id}/edit`}>Edit Book</Link>
      </button>
    </div>
  );
};
