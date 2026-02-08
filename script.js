// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Sticky Header & Scroll Top Button
const header = document.querySelector('header');
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
    scrollTopBtn.classList.add('active');
  } else {
    header.classList.remove('scrolled');
    scrollTopBtn.classList.remove('active');
  }
  
  // Highlight Active Link
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY + 100; // Offset for header

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + section.id) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Contact Form Submission (Mock)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const submitBtn = this.querySelector('.submit-btn');
  const originalText = submitBtn.innerHTML;
  
  submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
  submitBtn.disabled = true;

  // Simulate sending
  setTimeout(() => {
    submitBtn.innerHTML = 'Message Sent! <i class="fa-solid fa-check"></i>';
    submitBtn.style.backgroundColor = '#10b981'; // Green color
    
    setTimeout(() => {
      this.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.style.backgroundColor = '';
      submitBtn.disabled = false;
    }, 3000);
  }, 1500);
});
