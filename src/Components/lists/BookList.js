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
         delete={()=>props.deleteBookState(index)}
         key={book.id}
         inputName={(event)=>props.changeWithInputState(event,index)}
         />
      );
    })
  );
  }
  


export default BookList;