import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectBook } from "../actions/index";

class BookList extends Component {
  render() {
    return <ul className="list-group col-sm-4">{this.renderBook()}</ul>;
  }

  renderBook = () => {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  };
}

//What is returned from here
//shows as props inside booklist
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

//What is return from here
//shows as props inside bookList
function mapDispatchToProps(dispatch) {
  // When selectBook actionCreator is called
  // the result (action) should be passed to all of
  // the reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
