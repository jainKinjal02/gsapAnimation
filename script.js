// Select elements
const box = document.getElementById('box');
const circle = document.getElementById('circle');
const triangle = document.getElementById('triangle');
const diamond = document.getElementById('diamond');
const audio = document.getElementById('audio');

// Set initial positions for the shapes
gsap.set(box, { x: -100, y: -100 });
gsap.set(circle, { x: window.innerWidth - 100, y: -100 });
gsap.set(triangle, { x: -100, y: window.innerHeight - 100 });
gsap.set(diamond, { x: window.innerWidth - 100, y: window.innerHeight - 100 });

// Calculate the center positions
const centerX = (window.innerWidth / 2) - 200; // Adjust as needed to center the shapes in a line
const centerY = (window.innerHeight / 2) - 50; // Adjust as needed to center the shapes in a line

// Create a GSAP timeline
const tl = gsap.timeline({ repeat: -1, yoyo: true, onStart: () => audio.play() });

// Animate shapes to the center positions
tl.to(box, { x: centerX, y: centerY, duration: 2, ease: 'power2.inOut' })
  .to(circle, { x: centerX + 100, y: centerY, duration: 2, ease: 'power2.inOut' }, '-=2')
  .to(triangle, { x: centerX + 200, y: centerY, duration: 2, ease: 'power2.inOut' }, '-=2')
  .to(diamond, { x: centerX + 300, y: centerY, duration: 2, ease: 'power2.inOut' }, '-=2')
  // Additional animations
  .to(box, { rotation: 360, duration: 2, ease: 'elastic.out(1, 0.3)' })
  .to(circle, { rotation: -360, duration: 2, ease: 'elastic.out(1, 0.3)' }, '-=2')
  .to(triangle, { rotation: 360, duration: 2, ease: 'elastic.out(1, 0.3)' }, '-=2')
  .to(diamond, { rotation: -360, duration: 2, ease: 'elastic.out(1, 0.3)' }, '-=2');
