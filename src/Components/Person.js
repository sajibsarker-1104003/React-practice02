import React ,{Component} from 'react';
// function Person(){
//   return(
//     <div>
//       <h1> I am Person Component</h1>
//     </div>

//   );
// }

// let Person=(props)=>{
// return(
//      <div>
//         <h1> Name:{props.name} and Age:{props.age}</h1>
//         <h2> Extra Info:{props.children}</h2>
//      </div>
//       );
// }

class Person extends Component {
   constructor(props){
     super(props);

   }
   render(){
      console.log(this.props);
      return(
        <div>
             <h1> Name:{this.props.name} and Age:{this.props.age}</h1>
           <h2> Extra Info:{this.props.children}</h2>
        </div>
            );
   }
}
export default Person;