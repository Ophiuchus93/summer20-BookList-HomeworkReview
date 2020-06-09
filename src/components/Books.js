import React from "react";
import Book from "./Book";

const Books = ({name, liber, deleteBook}) => (
  <div>
    <h2>{name}</h2>
    <ul>
      {liber.map( book => <Book book={book} deleteBook={deleteBook}/> )}
    </ul>
  </div>
);

export default Books;