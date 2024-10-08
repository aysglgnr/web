import React, { useRef, useEffect, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import flipSoundFile from './turnPage.mp3';

const Flipbook = () => {
  const flipBook = useRef(null);
  const flipSound = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Load the sound file only once
  useEffect(() => {
    flipSound.current = new Audio(flipSoundFile);
    flipSound.current.preload = 'auto';
  }, []);

  // Track window size and dynamically adjust page dimensions
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Play sound when the page is flipped
  const handlePageFlip = () => {
    if (flipSound.current) {
      flipSound.current.currentTime = 0;
      flipSound.current.play();
    }
  };

  // Functions for turning pages forward and backward
  const nextPage = () => {
    flipBook.current.pageFlip().flipNext();
  };

  const prevPage = () => {
    flipBook.current.pageFlip().flipPrev();
  };

  // Dynamic size calculation (A4 aspect ratio: 210mm x 297mm)
  const a4AspectRatio = 297 / 210;
  const bookWidth = Math.min(windowWidth * 0.8, 420); // Limit width to 420px
  const bookHeight = bookWidth * a4AspectRatio; // A4 proportional height

  return (
    <div id="flip" style={styles.container}>
      {/* Flipbook component */}
      <HTMLFlipBook 
        width={bookWidth} 
        height={bookHeight} 
        ref={flipBook}
        onFlip={handlePageFlip}
        className="shadow-xl"
        flippingTime={600}
        maxShadowOpacity={0.6}
        showCover={true}
      >
        {[...Array(27).keys()].map(i => (
          <div className="page" key={i + 1} style={{ ...styles.page, height: bookHeight }}>
            <img src={require(`../images/${i + 1}.png`)} alt='' style={styles.image}/>
          </div>
        ))}
      </HTMLFlipBook>

      {/* Left arrow button */}
      <div onClick={prevPage} style={styles.arrowLeft}>
        &#9664;
      </div>

      {/* Right arrow button */}
      <div onClick={nextPage} style={styles.arrowRight}>
        &#9654;
      </div>
    </div>
  );
};

// Style settings
const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#fafafa',
    overflow: 'hidden',
  },
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    aspectRatio: '3 / 4', // Aspect ratio for all devices
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '4px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  arrowLeft: {
    position: 'absolute',
    left: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    fontSize: '36px',
    color: '#fff',
    backgroundColor: '#333',
    borderRadius: '50%',
    padding: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 1,
  },
  arrowRight: {
    position: 'absolute',
    right: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    fontSize: '36px',
    color: '#fff',
    backgroundColor: '#333',
    borderRadius: '50%',
    padding: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 1,
  }
};

export default Flipbook;
