import React from 'react';

const Card = ({ title, location, height }) => {
  return (      
          <div className="p-4 bg-gray-50 rounded shadow">
            <p > { title } </p>
            <p > { location } </p>
            <p > { height } </p>
          </div>
          
  )
}

export default Card;
