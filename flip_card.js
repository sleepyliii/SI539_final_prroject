document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle the flip effect
    function toggleFlip(event) {
      if (window.innerWidth > 850) {
        const card = event.currentTarget;
        card.classList.toggle('is-flipped');
      }
    }
  
    // Add event listeners to all character cards based on screen size
    function setupFlipCards() {
      const cards = document.querySelectorAll('.character-card');
  
      cards.forEach((card) => {
        if (window.innerWidth > 850) {
          // Add flip event listener
          card.addEventListener('click', toggleFlip);
        } else {
          // Remove flip event listener
          card.removeEventListener('click', toggleFlip);
        }
      });
    }
  
    // Initial setup
    setupFlipCards();
  
    // Re-setup on window resize
    window.addEventListener('resize', setupFlipCards);
  });