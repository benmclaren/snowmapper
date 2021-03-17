import React, { Component } from 'react';
// import react from 'react'

// import reactDom from 'react-dom';

class Filters extends Component {
    componentDidMount() {
        console.log(this.props.ResortData)
    }
    
    render() {
      return (
        <div>
         <form>
           <select name="dropdown">
           <option>Austria</option>
           </select>
         </form>

        </div>
      );
    }
}
export default Filters;
 
  // i only have the log from before 
  // yeah no i dont have it this time, it was a log from app.js  i was seeing ok refresh and see if you can look for RESORT DATA on the console
// just have an error for app is defined but not used ohhhh now??
// thats what i have in the console sorry give me a sec on a bootstrap ticket no worries i saw lol
  // i have the array ResortData? yes cool so you can call it like that, with class component this.props
// Did that log, can you see RESORT DATA logged?
  // so i iterate over this.props.RestortData?
  // yea good
  // see what this logs



 



// const Filters = ({ ResortData }) => {
//   // const [locations, setLocations] = useState([])
//   // const [height, setHeights] = useState([])
//     // {console.log(ResortData)};

//   return (
//     <form>
//       Country:
//       <select name="Country">
//         <option></option>
//         <option></option>
//         <option></option>
//         <option></option>
//         <option></option>
//       </select>
//     </form>
//   )
// };



  // useEffect(() => {
  //   const array = iterate();
  //   setLocations(array)
  // }, [])
