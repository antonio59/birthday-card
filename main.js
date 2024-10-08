import confetti from 'canvas-confetti';

document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.card');
  const back = document.querySelector('.back');
  
  card.addEventListener('click', () => {
    card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
    if (card.style.transform === 'rotateY(180deg)') {
      changePuppyImage();
      triggerConfetti();
    }
  });

  function changePuppyImage() {
    back.style.backgroundImage = `url('https://source.unsplash.com/300x400/?puppy&random=${Math.random()}')`;
  }

  function triggerConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  // Change puppy image every 5 seconds when the card is open
  setInterval(() => {
    if (card.style.transform === 'rotateY(180deg)') {
      changePuppyImage();
    }
  }, 5000);
});