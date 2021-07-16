
import React ,{Component} from 'react';
import './App.css';
import Person from './Components/Person';


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
         <h1>Hello Sajib</h1>
         <Person name="Sajib" age="25">I am Info</Person>
         <Person name="Santha" age="20">I am Info</Person>
         <Person name="jahid" age="28">I am Info</Person>
         <Person name="Rahim" age="26">I am Info</Person>
         <Person name="Kobir" age="29">I am Info</Person>
         <Person name="Arafat" age="35">I am Info</Person>
      </div>
    );
  }
}

export default App;
