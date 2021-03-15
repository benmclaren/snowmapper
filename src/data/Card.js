import React from 'react';

// const CardInfo = [
//   {
//   title: 'St Anton',
//   location: 'Austria',
//   height: '1,304 m',
//   },
//   {
//     title: 'Tignes',
//     location: 'France',
//     height: '1,810 m',
//   }

// ]

const Card = ({ title, location, height }) => {
  return (
    
      
          
            <div>
              <p > { title } </p>
              <p > { location } </p>
              <p > { height } </p>
            </div>
          
        
      
    
      

  
   
  )
}



// const Card = () => {
//   return (
//     <div>
//       { CardInfo.map((place, i) => {
//           return (
//             <div>
//               <p key={i}> { place.title } </p>
//               <p key={i}> { place.location } </p>
//               <p key={i}> { place.height } </p>
//             </div>
//           )
//         })
//       }
//     </div>
      

  
   
//   )
// }

export default Card;
