import React from "react";

const Book = ({book, deleteBook}) => (
  <>
  <li>{book.title}</li>
  <button onClick={() => deleteBook(book.id)}>Delete</button>
  </>
);

export default Book;