document.addEventListener("DOMContentLoaded", function () {
  let tl = gsap.timeline();

  // PHA5E Text Fade Out After 3s
  tl.to(".text", {
      duration: 1,
      opacity: 0,
      ease: "power2.inOut",
      delay: 2
  });

  
  tl.to(".hero", {
      duration: 1,
      opacity: 1,
      ease: "power2.inOut"
  });

  tl.to(".floating-images", {
      duration: 1.5,
      opacity: 1,
      ease: "power2.inOut"
  });
  tl.to(".floating-image", {
      duration: 1,
      opacity: 1,
      scale: 1.1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
  }, "-=0.5"); 
});
