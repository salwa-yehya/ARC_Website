import React from 'react'
import './GetStarted.css'
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div className='Home-Get'>
      <div className="Heading">
        <h2>Have A Project in Mind ?</h2>
      </div>
      <div className="Get-Button">
        <button className='button'>
          <Link to={'/contact'}
            onClick={() => {
              window.scroll(0, 0);
            }}
          >Get Started</Link> 
           </button>
         
      </div>
    </div>
  )
}

export default GetStarted