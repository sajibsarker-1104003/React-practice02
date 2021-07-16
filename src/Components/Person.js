import React from 'react';
// function Person(){
//   return(
//     <div>
//       <h1> I am Person Component</h1>
//     </div>

//   );
// }

let Person=(props)=>{
return(
     <div>
        <h1> Name:{props.name} and Age:{props.age}</h1>
        <h2> Extra Info:{props.children}</h2>
     </div>
      );
}
export default Person;