import React from 'react'
import './Pageshead.css'

const Pageshead = (props) => {

  const pageTitle = props.pageTitle;
  const description = props.description;
  return (
    <div className='Section'>
      <div className="content">
        <h1>{pageTitle}</h1>
        <p>{description}</p>
      </div>
    </div>

  )
}

export default Pageshead