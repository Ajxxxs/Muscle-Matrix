import Button from './Button';
import React from "react";


const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">

      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>

        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Swole<span  className="text-blue-400">normous</span></h1>
      </div>
      
      <p className="text-sm md:text-base font-light">
        Elevate your fitness game with our all-in-one gym app and become <span className="text-blue-400 font-medium">unbelievably Swolenormous</span >. Whether you're looking for <span className="text-blue-400 font-medium">personalized</span> workout plans, 
        <span className="text-blue-400 font-medium"> real-time</span> progress tracking, or expert tips, we've got you covered. Achieve your goals and stay motivated, all in one place.
      </p>

    <Button
      func={()=>{
        window.location.href = '#generate'
      }}
      text = {"Accept & Begin"}
    />

    </div>
  )  
}

export default Hero;



 