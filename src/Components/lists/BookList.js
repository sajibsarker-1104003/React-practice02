import React,{Component} from 'react';
import Book from '../representational/Book';
class BookList extends Component{
constructor(props){
  super(props);
  console.log("BookList Constructor!");
}
UNSAFE_componentWillMount(){
  console.log("BookList ComponentWill Mount!");
}
componentDidMount(){
  console.log("BookList ComponentDidMount!");
}
render(){
  console.log("BookList Render!");
  return(
    this.props.books.map((book,index)=>{
      return(
         <Book
         bookName={book.bookName}
         written={book.written}
         //delete={this.deleteBookState.bind(this,index)}
         delete={()=>this.props.deleteBookState(index)}
         key={book.id}
         inputName={(event)=>this.props.changeWithInputState(event,index)}
         />
      );
    })
  );
}
}
  
  
  


export default BookList;