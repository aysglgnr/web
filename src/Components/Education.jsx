import React, { useState } from 'react';
import video1 from '../videos/1.mp4';
import video2 from '../videos/2.mp4';
import video3 from '../videos/3.mp4';
import video4 from '../videos/4.mp4';

const Education = () => {
  const videos = [video1, video2, video3, video4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the previous video when the left button is clicked
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  // Go to the next video when the right button is clicked
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <div id="education" style={styles.container}>
      <div style={styles.videoContainer}>
        <video
          style={styles.video}
          controls
          key={currentIndex}
        >
          <source src={videos[currentIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Left and Right Arrow Buttons */}
      <div style={styles.arrowContainer}>
        {/* Left arrow button */}
        <div 
          onClick={goToPrevious} 
          style={styles.arrowLeft}
        >
          &#9664;
        </div>

        {/* Right arrow button */}
        <div 
          onClick={goToNext} 
          style={styles.arrowRight}
        >
          &#9654;
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100vh',
    padding: '20px',
    backgroundColor: '#f4f4f4', // Light grey background
  },
  videoContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    maxWidth: '800px',  // Maximum width for the video
    height: 'auto',
    borderRadius: '8px', // Rounded corners for the video
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow around the video
  },
  arrowContainer: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowLeft: {
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

export default Education;
