import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

function Slider({start}) {
  return (
      <Carousel fade >
          {start.map((item)=>(
              <Carousel.Item key={item.image} interval={2000} >
                  <img className='d-block w-100' 
                  src={item} 
                  alt="Not" />
                  
              </Carousel.Item>
          ))}
      </Carousel>
    
  )
}

export default Slider