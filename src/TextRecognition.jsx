import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
import Spinner from "./assets/Spinner.svg"

const TextRecognition = ({ selectedImage }) => {
  const [recognizedText, setRecognizedText] = useState('');
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  useEffect(() => {
    setLoadingSpinner(true);
    const recognizeText = async () => {
      if (selectedImage) {
        const result = await Tesseract.recognize(selectedImage);
        setRecognizedText(result.data.text);
      }
    };
    recognizeText();
    setLoadingSpinner(false);
  }, [selectedImage]);
  return (
    <div className='textDiv'>
      <h2>Recognized Text:</h2>
      
      { loadingSpinner ? <img className="Spinner" src={Spinner} /> :<p>{recognizedText}</p>}
    </div>
  );
};
export default TextRecognition;