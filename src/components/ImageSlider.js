import React, { useState } from 'react'

const ImageSlider=({slides}) => {
    const[currentIndex,setCurrentIndex]= useState(0);

    const sliderStyles={
        height: "100%",
        position: "relative",
    };

    const slideStyles= {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        // backgroundSize: "fit-content",
        backgroundSize: "contain", 
    backgroundRepeat: "no-repeat", // Prevent image repetition
        backgroundImage: `url(${slides[currentIndex].url}) `,
    };

    const leftArrowStyles= {
        position: "absolute",
        top: "50%",
        transform: "translate(0,-50%)",
        left: "32px",
        fontSize: "45px",
        color: "black",
        zIndex: 1,
        cursor: "pointer",
    };

    const rightArrowStyles= {
        position: "absolute",
        top: "50%",
        transform: "translate(0,-50%)",
        right: "32px",
        fontSize: "45px",
        color: "black",
        zIndex: 1,
        cursor: "pointer",
    };

    const goToPrevious= () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex-1;
        setCurrentIndex(newIndex);
    };


    const goToNext= () => {
        const isLastSlide = currentIndex === slides.length-1;
        const newIndex = isLastSlide ? 0 :  currentIndex+1;
        setCurrentIndex(newIndex);
    };


  return (
         <div style={sliderStyles} className="Slider">
        <div style={leftArrowStyles}  onClick={goToPrevious}><i className="fa-solid fa-chevron-left"></i></div>
        <div style={rightArrowStyles} onClick={goToNext}><i className="fa-solid fa-chevron-right"></i></div>
      <div style={slideStyles} className="Slide"
      ></div>
    </div>
    
   
  )
}

export default  ImageSlider;
