import React from 'react'
import '../Stylesheet/Hotitemcard.css'

const Hotitemcard = ({name,index,image,price}) => {
  return (
    <div className="hotitemcard">
        <img src={image} alt={`${index} product`} />
        <p>{name}</p>
        <span>{price}</span>
        </div>
  )
}

export default Hotitemcard