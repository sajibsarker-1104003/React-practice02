import React from 'react';
import '../stylesheets/Book.css';
const Book=(props)=>{
  return(
    <div className="Book">
      <h1 onClick={props.delete}> Book:{props.bookName}    Written:{props.written}</h1>
      <h2>Info:{props.children}</h2>
      <input type="text" onChange={props.inputName} value={props.bookName}/>
    </div>
        );
}
export default Book;