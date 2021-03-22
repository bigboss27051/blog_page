import React from 'react'
import './Card.css'
import TempImg from '../assets/images/350x200.png'


const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl === "" ? TempImg : imageUrl} alt="blogImage" style={{ width: '300px', height: '250px' }} />
      <div className="container">
        <h4 className="text-title"><b>{title}</b></h4>
        <p className="text-description" dangerouslySetInnerHTML={{
          __html: description,
        }}
        />
      </div>
    </div>
  )
}

export default Card