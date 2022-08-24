import React from "react";

class Book extends React.Component {
  render() {
    // <h1>selam</h1>;
    console.log(this.props.book);
    return (
      <div>
        <h4>{this.props.book.title}</h4>
        <h5>{this.props.book.author}</h5>
      </div>
    );
  }
}

export default Book;
