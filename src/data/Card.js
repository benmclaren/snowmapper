import React from 'react';



const Card = ({ title, location, height }) => {
  return (      
            <div>
              <p > { title } </p>
              <p > { location } </p>
              <p > { height } </p>
            </div>
          
  )
}

export default Card;
