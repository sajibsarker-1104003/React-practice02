import React from 'react';
import Book from '../representational/Book';
const BookList=(props)=>{
  return(
    props.books.map((book,index)=>{
      return(
         <Book
         bookName={book.bookName}
         written={book.written}
         //delete={this.deleteBookState.bind(this,index)}
         delete={()=>this.deleteBookState(index)}
         key={book.id}
         inputName={(event)=>this.changeWithInputState(event,index)}
         />
      );
    })
  );
  }
  


export default BookList;