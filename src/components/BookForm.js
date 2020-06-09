import React from "react";

class BookForm extends React.Component {
  state = {
    title: ""
  };

  handleChange = (e) => {
    this.setState({ title: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault();
      this.props.addBook(this.state.title)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input 
          value={this.state.title}
          required
          placeholder={"Add A new Book"}
          onChange={this.handleChange}
          />
        </form>
      </div>
    );
  };
};

export default BookForm;