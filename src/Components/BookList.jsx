import React from "react";
import styled from "styled-components";
import { BookCard } from "./BookCard";

export const BookList = ({ books }) => {
  return (
    <>
      {books.length > 0 &&
        books.map((singleBook) => {
          return (
            <BookCardWrapper key={singleBook.id}>
              <BookCard singleBook={singleBook} />
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
