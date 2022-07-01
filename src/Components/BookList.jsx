import React, { useEffect } from "react";
import styled from "styled-components";
import { BookCard } from "./BookCard";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/AppReducer/action";
import { Link, useLocation, useSearchParams } from "react-router-dom";

export const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.appReducer.books);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (books.length === 0 || location.search) {
      const sortBy = searchParams.get("sortBy");
      let getBooksParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort: sortBy && "release_year",
          _order: sortBy,
        },
      };
      dispatch(getBooks(getBooksParams));
    }
  }, [location.search, dispatch, books.length, searchParams]);

  return (
    <>
      {books.length > 0 &&
        books.map((singleBook) => {
          return (
            <BookCardWrapper key={singleBook.id}>
              <Link to={`/book/${singleBook.id}`}>
                <BookCard singleBook={singleBook} />
              </Link>
            </BookCardWrapper>
          );
        })}
    </>
  );
};

const BookCardWrapper = styled.div`
  border: 1px solid blue;
  margin: 5px;
  padding: 5px;
`;
