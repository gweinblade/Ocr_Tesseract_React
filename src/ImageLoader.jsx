import React, { useState } from 'react';
import Noimage from "./assets/Noimage.svg"
const ImageLoader = ({selectedImage,setSelectedImage}) => {
    const handleImageUpload = (event) => {
        const image = event.target.files[0];
        setSelectedImage(URL.createObjectURL(image));
      };
  return (
    <div className='imageDiv'>
      <label for="file-upload" class="custom-file-upload">
        Custom Upload
      </label>
      
      <input id="file-upload" type="file" accept="image/*" onChange={handleImageUpload} />
      <img src={selectedImage ?? Noimage} alt="Selected" />
    </div>
  );
};
export default ImageLoader;