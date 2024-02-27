import React from "react";
import Image1 from '../Assets/Images/acRepair.png'


//class component
// class Test extends React.Component {
//     render() {
//         return(
//             <h1> Hello React!</h1>
//         )
            
//     }
// }

//function component


function Test() {
  return (
    <div>
         <img src={Image1} alt='Image of a car'></img>
         <div>Luffy</div>
         <p>React is Amazing</p>
    </div>
   
  )
}


export default Test;

//props short term for properties

//Life Cycle

//1. Initialization
//2. Mounting
//3. Unmounting
//4. Updation

//state = specific to a component alone

//React Hooks
//useState, useEffect

