import React, { useRef, useEffect, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import flipSoundFile from './turnPage.mp3';
import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';
import img7 from '../images/7.png';
import img8 from '../images/8.png';
import img9 from '../images/9.png';
import img10 from '../images/10.png';
import img11 from '../images/11.png';
import img12 from '../images/12.png';
import img13 from '../images/13.png';
import img14 from '../images/14.png';
import img15 from '../images/15.png';
import img16 from '../images/16.png';
import img17 from '../images/17.png';
import img18 from '../images/18.png';
import img19 from '../images/19.png';
import img20 from '../images/20.png';
import img21 from '../images/21.png';
import img22 from '../images/22.png';
import img23 from '../images/23.png';
import img24 from '../images/24.png';
import img25 from '../images/25.png';
import img26 from '../images/26.png';
import img27 from '../images/27.png';

const Flipbook = () => {
  const flipBook = useRef(null);
  const flipSound = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // Load the sound file only once
  useEffect(() => {
    flipSound.current = new Audio(flipSoundFile);
    flipSound.current.preload = 'auto';
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

  // Dynamic size calculation (width and height)
  const bookWidth = Math.min(windowWidth * 0.8, 420);
  const bookHeight = Math.min(windowHeight * 0.8, 594);

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
