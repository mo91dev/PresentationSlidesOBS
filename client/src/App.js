import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(images.length)

  const toggleHidden = () => {
    setHidden(!hidden)
  }

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setImages(imageUrls);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };


  useEffect(() => {
    if (!images.length) {
      setIsPresentationMode(false)
    } else {
      setIsPresentationMode(!hidden)
    }
  }, [hidden, images])

  return (
    <div className="App">

      <div className={'presentation-container'}>
        {isPresentationMode && (
          <img src={images ? images[currentIndex] : ''} alt="" className="presentation-image" />

        )}
      </div>

      <div className='controls'>
        <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
        <button onClick={toggleHidden}>{hidden ? 'Unhide' : 'Hide'}</button>
        <label className='file-selector'>
          Select Files...
          <input type="file" multiple accept="image/*" onChange={handleImageChange} >
          </input>
        </label>
      </div>

      <div className='slide-preview-container'>
        <div className='slide-preview-item'>
          <p>Previous</p>
          <div className='slide-previous'>
            <img src={currentIndex > 0 ? images[currentIndex - 1] : ''} alt="" className="presentation-image" />
          </div>
        </div>

        <div className='slide-preview-item'>
          <p>Next</p>
          <div className='slide-next'>
            <img src={images.length && currentIndex < images.length - 1 ? images[currentIndex + 1] : ''} alt="" className="presentation-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
