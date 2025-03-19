document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const pha5eText = document.querySelector(".animated-text");
  const heroText = document.querySelector(".hero-sub");
  const floatingImages = document.querySelector(".floating-images");
  const images = document.querySelectorAll(".floating-image");
  const descriptions = document.querySelectorAll(".image-desc");

  // PHA5E Text Animation
  gsap.to(".text::before", {
    clipPath: "inset(0 0 0 0)",
    duration: 3,
    ease: "power2.out",
    onComplete: () => {
      gsap.to(pha5eText, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          pha5eText.style.display = "none";
          gsap.to(heroText, { opacity: 1, duration: 1 });
          gsap.to(floatingImages, { opacity: 1, duration: 1.5 });
        }
      });
    }
  });

  // Hover Effect: Show Description
  images.forEach((image, index) => {
    image.addEventListener("mouseenter", () => {
      gsap.to(descriptions[index], { opacity: 1, duration: 0.3 });
    });

    image.addEventListener("mouseleave", () => {
      gsap.to(descriptions[index], { opacity: 0, duration: 0.3 });
    });
  });

  // Individual Mouse Follow Effect for Each Image
  document.addEventListener("mousemove", (e) => {
    images.forEach((image, index) => {
      const speed = (index + 1) * 0.05; // Different speeds for each image
      const xMove = (e.clientX - window.innerWidth / 2) * speed;
      const yMove = (e.clientY - window.innerHeight / 2) * speed;

      gsap.to(image, {
        x: xMove,
        y: yMove,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  });

  // Scroll-triggered Hero Text Animation (Word-by-word Stagger)
  gsap.from(".hero-sub span", {
    y: 50,
    opacity: 0,
    stagger: 0.5, // Each word appears with a delay
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".hero-sub",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});
