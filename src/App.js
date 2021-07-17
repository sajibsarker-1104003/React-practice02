
import React ,{Component} from 'react';
import './App.css';
//import Person from './Components/Person';
import Book from './Components/Book';


// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Sajib</h1>
//       <Person/>
//     </div>
//   );
// }
// function App(){
// return React.createElement('div', { className: "App" }, React.createElement('h1', null, "Hello World"),<Person/> );
// }

// function Person(){
//   return(
//     <div>
//       <h1> I am Person Component</h1>
//     </div>

//   );
// }
// function Person(){
//   return(React.createElement('div',null,React.createElement('h1',null,"I am Person Component")));
// }



class App extends Component{
  render(){
    return(
      <div className="App">
         <h1>Book List</h1>
         <Book bookName="1984" written="George Orwell">Book Info</Book>
         <Book bookName="1971" written="x">Book Info</Book>
         <Book bookName="1947" written="y">Book Info</Book>
         <Book bookName="1954" written="z">Book Info</Book>
      </div>
    );
  }
}

export default App;
