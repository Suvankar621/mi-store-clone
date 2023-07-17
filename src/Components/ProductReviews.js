import React from 'react'
import ProductReviewCard from './ProductReviewCard'
import "../Stylesheet/Productreviews.css"

const ProductReviews = ({ProductReviews}) => {
  return (
  <div className="productreviews">
      {ProductReviews.map((item,index)=>(
         <ProductReviewCard price={item.price} name={item.name} image={item.image} index={index} key={item.image} />
      ))}
      
      </div>
  )
}

export default ProductReviews