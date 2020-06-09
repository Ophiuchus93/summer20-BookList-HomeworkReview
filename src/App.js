import React from "react";
import Books from "./components/Books";
import BookForm from "./components/BookForm";

class App extends React.Component {
  state = {
    books: [
      { id: 1, title: "Thoughts without a Thinker", },
      { id: 2, title: "Bhagavad Gita", },
      { id: 3, title: "Grapes of Wrath", },
    ],
    showForm: true,
  }

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm })

  addBook = (title) => {
    const { books, } = this.state;
    const book = { title, id: this.getUniqId(), };
    this.setState({ books: [...books, book,] })
  };

  deleteBook = (id) => {
    // debugger
    const books = this.state.books.filter( book => {
      if (book.id !== id)
        return book
    });
      this.setState({ books: [...books] });
  }

  // renderBooks = () => {
  //   const { books, } = this.state;
  //   return books.map(book => 
  //     <li key={book.id}>{book.title}</li>
  //   )
  // }

  render() {
    const { books, } = this.state;
    return (
      <>
        <Books name={"DPL Library"} liber={books} deleteBook={this.deleteBook}/>
        <div>
          <button onClick={this.toggleForm}>^^</button>
          {this.state.showForm && <BookForm addBook={this.addBook} />}
        
        </div>
      </>
    );
  };
};

export default App;