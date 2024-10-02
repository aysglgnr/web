import React, { useRef, useEffect, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import flipSoundFile from './turnPage.mp3';
import ays from '../images/p.jpg';
import ays2 from '../images/sd.png';
import ays3 from '../images/de.jpeg';

const Flipbook = () => {
  const flipBook = useRef(null);
  const flipSound = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // Load the sound file only once
  useEffect(() => {
    flipSound.current = new Audio(flipSoundFile);
    flipSound.current.preload = 'auto';  // Preload the sound file
  }, []);

  // Track window size and dynamically adjust page dimensions
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Play sound when the page is flipped
  const handlePageFlip = () => {
    if (flipSound.current) {
      flipSound.current.currentTime = 0;  // Restart the sound from the beginning
      flipSound.current.play();           // Play the sound
    }
  };

  // Functions for turning pages forward and backward
  const nextPage = () => {
    flipBook.current.pageFlip().flipNext();
  };

  const prevPage = () => {
    flipBook.current.pageFlip().flipPrev();
  };

  // Dynamic size calculation (width and height)
  const bookWidth = Math.min(windowWidth * 0.8, 500); // Use 80% of screen width
  const bookHeight = Math.min(windowHeight * 0.8, 800); // Use 80% of screen height

  return (
    <div id="flip" style={styles.container}>
      {/* Flipbook component */}
      <HTMLFlipBook 
        width={bookWidth} 
        height={bookHeight} 
        ref={flipBook}
        onFlip={handlePageFlip} // Attach the page flip sound function
        className="shadow-xl" // Higher quality shadow
        flippingTime={600} // Page flip duration
        maxShadowOpacity={0.6} // Increased shadow opacity
        showCover={true} // Show the cover page
      >
        <div className="page" style={{ ...styles.page, height: bookHeight }}>Page 1</div>
        <div className="page" style={{ ...styles.page, height: bookHeight }}>Page 2</div>
        <div className="page" style={{ ...styles.page, height: bookHeight }}>
          <img src={ays} alt='' style={styles.image}/>
        </div>
        <div className="page" style={{ ...styles.page, height: bookHeight }}>
          <img src={ays2} alt='' style={styles.image}/>
        </div>
        <div className="page" style={{ ...styles.page, height: bookHeight }}>
          <img src={ays3} alt='' style={styles.image}/>
        </div>
        <div className="page" style={{ ...styles.page, height: bookHeight }}>Page 6</div>
      </HTMLFlipBook>

      {/* Left arrow button */}
      <div 
        onClick={prevPage} 
        style={styles.arrowLeft}
      >
        &#9664;
      </div>

      {/* Right arrow button */}
      <div 
        onClick={nextPage} 
        style={styles.arrowRight}
      >
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
    backgroundColor: '#fafafa', // Light background color
    overflow: 'hidden', // Prevent overflow of pages
  },
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    backgroundColor: '#ffffff',  // White page background
    border: '1px solid #ddd', // Border around the page
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow
    borderRadius: '8px', // Rounded corners
  },
  image: {
    width: '100%',  // Adjust image width to fit the page
    height: '100%',
    objectFit: 'cover', // Ensure the image fits without overflow
    borderRadius: '4px', // Slightly rounded image corners
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Image shadow
  },
  arrowLeft: {
    position: 'absolute',
    left: '20px',  // Closer to the edge, no overflow
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    fontSize: '36px',
    color: '#fff',
    backgroundColor: '#333',
    borderRadius: '50%',
    padding: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
    transition: 'background-color 0.3s ease',
    zIndex: 1,
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
    transition: 'background-color 0.3s ease',
    zIndex: 1,
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Flipbook;
