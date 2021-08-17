import React, { Component } from 'react';
import BookList from './lists/BookList';
import bookList from '../assets/books';
import NewBook from './representational/NewBook';
import {Route,NavLink} from 'react-router-dom';


class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: bookList
        }
        
    }


    changeWithInputState = (event, index) => {
        const book = {
            ...this.state.books[index]
        }
        book.bookName = event.target.value;
        const books = [...this.state.books];
        books[index] = book;
        this.setState({ books: books });
    }

    deleteBookState = index => {
        //const books = this.state.books.slice();
        //const books = this.state.books.map(item => item);
        const books = [...this.state.books];
        books.splice(index, 1);
        this.setState({
            books: books
        });
    };

    render() {
      
            const books = <BookList
                books={this.state.books}
                deleteBookState={this.deleteBookState}
                changeWithInputState={this.changeWithInputState}
            />
        

        return (
            <div className="App">
                <nav className="nav-bar">
                   <ul>
                       <li><NavLink to="/" exact>Home</NavLink></li>
                       <li><NavLink to="/new-book">NewBook</NavLink></li>
                   </ul>
                </nav>
              <Route path="/" exact render={()=>books}/>
              <Route path="/new-book" exact render={()=><NewBook/>}/>
              {/* <Route path="/new-book" exact component={NewBook}/> */}
            </div>
        );
    }
}

export default MainComponent;