
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
    ],
    showBooks:true
  }
 
 
  changeWithInputState=(event,index)=>{
    const book={...this.state.books[index]
    }
    book.bookName=event.target.value;
    const books=[...this.state.books];
    books[index]=book;
    this.setState({books:books});
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
      toggleBooks=()=>{
      this.setState({ showBooks:!this.state.showBooks})
      }

  render(){
    const style={
      border:"1 px solid red",
      borderRadius:"5px",
      backgroundColor:"black",
      color:"white"
    };
    
    const books=this.state.books.map((book,index)=>{
      return(
         <Book
         bookName={book.bookName}
         written={book.written}
         delete={this.deleteBookState.bind(this,index)}
         //delete={()=>this.deleteBookState(index)}
         key={book.id}
         inputName={(event)=>this.changeWithInputState(event,index)}
         />
      );
    });
    console.log(books);
    return(
      <div className="App">
         <h1 style={style}>Book List</h1>
         <button onClick={this.toggleBooks}>Toggle Books</button>
         {this.state.showBooks? books:null}
      </div>
    );
  }
}
// Another Way Of Binding:
// <button onClick={()=>this.changeBookState("Nineteen Eighty Four")}>Change State</button>
export default App;

