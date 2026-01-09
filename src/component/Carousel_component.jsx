import React from 'react'

const Carousel_component = ({slides}) => {
  return (
    <div>
      {slides.map((s)=>{
        return<img src={s}/>
      })}
    </div>
  )
}

export default Carousel_component
