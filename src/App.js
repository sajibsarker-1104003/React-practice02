
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
      {bookName:"1984",written:"Gerorge"},
      {bookName:"x",written:"xy"},
      {bookName:"y",written:"yz"},
      {bookName:"z",written:"zx"}
    ],
    otherProp:"I am some other Prop"
  }
  changeBookState=()=>{
    console.log("Button Clicked!!!");
   this.setState({
    books:[
      {bookName:"P",written:"pp"},
      {bookName:"Q",written:"qq"},
      {bookName:"R",written:"rr"},
      {bookName:"S",written:"ss"}
    ]
   });
  }
  render(){
    return(
      <div className="App">
         <h1>Book List</h1>
         <button onClick={this.changeBookState}>Change State</button>
         <Book bookName={this.state.books[0].bookName} written={this.state.books[0].written}/>
         <Book bookName={this.state.books[1].bookName} written={this.state.books[1].written}/>
         <Book bookName={this.state.books[2].bookName} written={this.state.books[2].written}/>
         <Book bookName={this.state.books[3].bookName} written={this.state.books[3].written}/> 
      </div>
    );
  }
}

export default App;
