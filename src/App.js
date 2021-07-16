import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Sajib</h1>
//       <Person/>
//     </div>
//   );
// }
function App(){
  return(React.createElement('div',{className:"App"},React.createElement('h1',null,"Hello World")));
}

// function Person(){
//   return(
//     <div>
//       <h1> I am Person Component</h1>
//     </div>

//   );
// }
function Person(){
  return(React.createElement('div',null,React.createElement('h1',null,"I am Person Component")));
}

export default App;
