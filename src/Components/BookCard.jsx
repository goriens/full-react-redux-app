import React from "react";

export const BookCard = ({ singleBook }) => {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSb0kaeqYsRqBfrKuoppTCfhimmlDkNb3ycw&usqp=CAU"
        alt=""
      />
      <div>{singleBook.author}</div>
      <h3>{singleBook.cover_photo}</h3>
      <p>
        <strong> Category: {singleBook.category}</strong>
      </p>
      <div>Release Year: {singleBook.release_year}</div>
      <div>Number of chapters - {singleBook.no_of_chapters}</div>
    </div>
  );
};
