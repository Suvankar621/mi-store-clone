import React from 'react'
import '../Stylesheet/ProductReviewCard.css'

const ProductReviewCard = ({image,index,price,name,review}) => {
  return (
    <div className='ProductReviewCard'>
        <img src={image} alt={`${index} reviews`} />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>

    </div>
  )
}

export default ProductReviewCard