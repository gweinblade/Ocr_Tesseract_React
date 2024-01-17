import { useState } from 'react'

import './App.scss'
import ImageLoader from './ImageLoader';
import TextRecognition from './TextRecognition';

function App() {
  const [count, setCount] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null);
 
  return (
    <div className='scinder'>
    
     <ImageLoader selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
     <TextRecognition selectedImage={selectedImage} />
    </div>
  )
}

export default App
