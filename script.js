window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("shadow-md");
    return;
  } 
    header.classList.remove("shadow-md");
  }
);


let index = 0;
function moveSlide(step) {
  const carousel = document.querySelector('.client-carousel');
  const cards = document.querySelectorAll('.client-card');
  index += step;

  if (index < 0) index = cards.length - 1;
  if (index >= cards.length) index = 0;

  const offset = -index * (cards[0].offsetWidth + 30);
  carousel.style.transform = `translateX(${offset}px)`;
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent("Pesan dari " + name);
  const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);


  const yourEmail = "youremail@example.com";
  window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`;
});


function sendToWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Harap isi semua kolom sebelum mengirim pesan.");
    return;
  }

  const phone = "6281234567890";
  const text = `Halo! Saya ${name} (${email}).%0A%0A${message}`;
  const url = `https://wa.me/${phone}?text=${text}`;
  window.open(url, "_blank");
}
