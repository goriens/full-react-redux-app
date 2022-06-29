import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookList } from "../Components/BookList";
import { FilterSort } from "../Components/FilterSort";
import { getBooks } from "../Redux/action";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

export const Books = () => {
  const [searchparams] = useSearchParams();

  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    const urlCategory = searchparams.getAll("category");
    const urlSort = searchparams.getAll("sortBy");

    if (books.length === 0 && (!urlCategory || !urlSort)) {
      dispatch(getBooks());
    }
  }, [dispatch, books, searchparams]);

  //console.log("books", books);
  return (
    <div>
      <h1>Books</h1>
      <BookPageWrapper>
        <FilterSortWrapper>
          <FilterSort />
        </FilterSortWrapper>
        <BookListWrapper>
          <BookList books={books} />
        </BookListWrapper>
      </BookPageWrapper>
    </div>
  );
};

const BookPageWrapper = styled.div`
  display: flex;
`;
const FilterSortWrapper = styled.div`
  width: 300px;
  border: 1px solid red;
`;
const BookListWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, max-content));
  grid-gap: 16px;
  justify-content: center;
  padding: initial;
`;
