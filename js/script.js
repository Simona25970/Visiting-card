// Efekt pro menu při scrollování - jemná spodní linka
window.addEventListener('scroll', function () {
     const menu = document.querySelector('.menu');

     if (window.scrollY > 10) {
          menu.classList.add('scrolled');
     } else {
          menu.classList.remove('scrolled');
     }
});

// Fade-in efekt pro sekce 
document.addEventListener("DOMContentLoaded", () => {
     const animatedElements = document.querySelectorAll('.fade-in, .slide-up');

     const observerOptions = {
          root: null,         // Sleduje se výřez prohlížeče (viewport)
          rootMargin: "0px",  // Žádný extra okraj kolem výřezu
          threshold: 0.15     // Prvek se aktivuje, když je z 15 % viditelný
     };

     const appearanceObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    // Přidá třídu pro spuštění CSS animace
                    entry.target.classList.add('visible');
                    // Přestane prvek sledovat, aby se animace nespouštěla znovu při každém scrollu navíc
                    observer.unobserve(entry.target);
               }
          });
     }, observerOptions);

     // Registrace všech prvků do observeru
     animatedElements.forEach(element => appearanceObserver.observe(element));
});


