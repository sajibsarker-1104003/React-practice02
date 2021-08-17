import React, { Component } from 'react';
import Book from '../representational/Book';
import { withRouter } from 'react-router-dom';

class BookList extends Component {
    render() {
        console.log(this.props);
        return (
            this.props.books.map((book, index) => {
                return (
                    <Book
                        bookName={book.bookName}
                        writer={book.writer}
                        delete={() => this.props.deleteBookState(index)}
                        key={book.id}
                        inputName={(event) => this.props.changeWithInputState(event, index)}
                    />
                );
            })
        );
    }
}


export default withRouter(BookList);