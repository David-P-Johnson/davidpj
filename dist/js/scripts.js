/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Array of image paths
const images = [
    '../dist/assets/portfolio/2-22.png',
    '../dist/assets/portfolio/adobe-after-effects.png',
    '../dist/assets/portfolio/adobe-illustrator.png',
    '../dist/assets/portfolio/amalgaBookCover.png',
    '../dist/assets/portfolio/fireplace.gif'
  ];
  
  // Fisher-Yates Shuffle
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Dynamically assign images to existing .portfolioImage divs
  function assignPortfolioImages() {
    // Shuffle images to ensure randomness
    const shuffledImages = shuffleArray([...images]);
  
    // Get all elements with the class .portfolioImage
    const portfolioElements = document.querySelectorAll('.portfolioImage');
  
    portfolioElements.forEach((element, index) => {
      // Loop through shuffled images and assign them to divs
      if (index < shuffledImages.length) {
        // Assign a unique background image
        element.style.backgroundImage = `url(${shuffledImages[index]})`;
      } else {
        // If more divs than images, start looping the images
        const loopedIndex = index % shuffledImages.length;
        element.style.backgroundImage = `url(${shuffledImages[loopedIndex]})`;
      }
    });
  }
  
  // Initialize
  assignPortfolioImages();
  