
import React ,{Component} from 'react';
import './App.css';
//import Person from './Components/Person';
import Book from './Components/Book';


class App extends Component{
  // constructor(){
  //   super();
  //   this.state={}
  // }
  state={
    books:[
      {id:1,bookName:"1984",written:"Gerorge"},
      {id:2,bookName:"x",written:"xy"},
      {id:3,bookName:"y",written:"yz"},
      {id:4,bookName:"z",written:"zx"}
    ]
  }
 
 
  changeWithInputState=e=>{
    this.setState({
      books:[
        {bookName:e.target.value,written:"pp"},
        {bookName:"Q",written:"qq"},
        {bookName:"R",written:"rr"},
        {bookName:"S",written:"ss"}
      ]
     });
  }

  deleteBookState=index=>{
    //const books=this.state.books;
    //const books=this.state.books.slice();
    //const books=this.state.books.map(item=>item);
    const books=[...this.state.books];
    books.splice(index,1);
    this.setState({
      books:books
    });
      };

  render(){
    const style={
      border:"1 px solid red",
      borderRadius:"5px",
      backgroundColor:"black",
      color:"white"
    };
    // const booksState=this.state.books;
    // console.log(booksState);
    // const books=booksState.map(function(book){
    //   console.log(book.bookName);
    //   console.log(book.written);
    // });
    const books=this.state.books.map((book,index)=>{
      return(
         <Book
         bookName={book.bookName}
         written={book.written}
         delete={this.deleteBookState.bind(this,index)}
         //delete={()=>this.deleteBookState(index)}
         key={book.id}
         />
      );
    });
    console.log(books);
    return(
      <div className="App">
         <h1 style={style}>Book List</h1>
         {books}
      </div>
    );
  }
}
// Another Way Of Binding:
// <button onClick={()=>this.changeBookState("Nineteen Eighty Four")}>Change State</button>
export default App;

