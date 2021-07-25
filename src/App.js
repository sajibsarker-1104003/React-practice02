
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
  changeBookState=newBookName=>{
    console.log("Button Clicked!!!");
   this.setState({
    books:[
      {bookName:newBookName,written:"pp"},
      {bookName:"Q",written:"qq"},
      {bookName:"R",written:"rr"},
      {bookName:"S",written:"ss"}
    ]
   });
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
  render(){
    const style={
      border:"1 px solid red",
      borderRadius:"5px",
      backgroundColor:"black",
      color:"white"
    };
    return(
      <div className="App">
         <h1 style={style}>Book List</h1>
         <button onClick={this.changeBookState.bind(this,"Nineteen Eighty Four")}>Change State</button>
         <input type="text" onChange={this.changeWithInputState}/>

         <Book 
         bookName={this.state.books[0].bookName}       written={this.state.books[0].written}
         inputName={this.changeWithInputState}/>

         <Book 
         bookName={this.state.books[1].bookName} 
         written={this.state.books[1].written}/>

         <Book 
         bookName={this.state.books[2].bookName} 
         written={this.state.books[2].written}/>
         

         <Book 
         bookName={this.state.books[3].bookName} 
         written={this.state.books[3].written}
         change={this.changeBookState.bind(this,"1984")}/> 
      </div>
    );
  }
}
// Another Way Of Binding:
// <button onClick={()=>this.changeBookState("Nineteen Eighty Four")}>Change State</button>
export default App;

