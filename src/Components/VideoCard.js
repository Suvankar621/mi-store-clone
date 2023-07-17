import React from 'react'
import "../Stylesheet/VideoCard.css"

const VideoCard = ({name,index,image}) => {
  return (
    <div className="Videocard" style={{backgroundImage:`url(${image})`}}>
        <p>{name}</p>
        </div>
  )
}

export default VideoCard