import React, { useState, useEffect } from 'react';


// Assuming you have multiple high-quality images for the slideshow

import image0 from "../../assets/banner/RhaegarTourney.jpg";
import image1 from "../../assets/banner/Dune.jpg"
import image2 from "../../assets/banner/Jaime.jpg"
import image3 from "../../assets/banner/BurningGrass.jpg"
import image4 from "../../assets/banner/Joffrey.png"
import image5 from "../../assets/banner/WarofRohirrim.avif"
import image6 from "../../assets/banner/Batman4.webp"
import image7 from "../../assets/banner/LOTR2.jpg"
import image8 from "../../assets/banner/STARWARS.jpg"
import image9 from "../../assets/banner/Turk.jpg"
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {
  const images = [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9]; // Array of images
  const [currentImage, setCurrentImage] = useState(0); // Current image index

  let navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(currentImage => (currentImage + 1) % images.length); // Cycle through images
    }, 8000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  const handleClick = () => {
    navigate('#first-redirect'); // Navigate to a specific part of another route
  };


  return (
    <div className="relative">
      {/* Background image */}
      <img src={images[currentImage]} alt="Best Bookstore Canada" className="w-full h-95 object-cover" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-6">Harrenhall Bookstore</h1>
        <p className="text-xl mb-8 max-w-lg">Explore the greatest hits in Fantasy and Speculative Fiction</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded" onClick={handleClick}>Have a look around!</button>
      </div>
    </div>
  );
};

export default HeroBanner;