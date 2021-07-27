import React ,{Component} from 'react';
import BookList from './lists/BookList';
import bookList from '../assets/books';
class MainComponent extends Component{
// constructor(){
  //   super();
  //   this.state={}
  // }
  state={
    books:bookList,
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
    
    let books=null;
    if(this.state.showBooks){
       books=<BookList books={this.state.books} 
       deleteBookState={this.deleteBookState}
       changeWithInputState={this.changeWithInputState}/>
    }
    
    console.log(books);
    return(
      <div className="App">
         <h1 style={style}>Book List</h1>
         <button onClick={this.toggleBooks}>Toggle Books</button>
         {books}
      </div>
    );
  }
}
// Another Way Of Binding:
// <button onClick={()=>this.changeBookState("Nineteen Eighty Four")}>Change State</button>
export default MainComponent;