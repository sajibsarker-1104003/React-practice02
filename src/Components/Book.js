import React from 'react';
const Book=(props)=>{
  return(
    <div>
      <h1>Book:{props.bookName} Written:{props.written}</h1>
      <h2>Info:{props.children}</h2>
    </div>
        );
}
export default Book;