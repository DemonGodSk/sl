const namePage = document.getElementById("namePage");
const wishPage = document.getElementById("wishPage");
const photoPage = document.getElementById("photoPage");
const nameInput = document.getElementById("nameInput");
const typingText = document.getElementById("typingText");

// Your birthday message
const message = `Dear Laksha,

On this special day, I just wanted to take a moment to wish you the happiest of birthdays. 🎉

May this year bring you closer to your dreams, help you grow stronger, and give you endless reasons to smile. Your presence truly lights up the people around you, and I hope today brings you the same joy you give to others.

Life is made up of special days — and today is all yours.

So celebrate, laugh, enjoy, and remember how amazing you are.

Here's to a year full of growth, knowledge, success, and peace. 🌟

Keep shining, keep smiling.

Happy Birthday, Laksha! 🎂

— With warm wishes,by
Siddharth`;

// Typing animation
let index = 0;
function typeWriter() {
  if (index < message.length) {
    typingText.innerHTML += message.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // typing speed
  } else {
    // After typing ends, go to photo page after 3 seconds
    setTimeout(() => {
      wishPage.classList.add("hidden");
      photoPage.classList.remove("hidden");
      showPhotos();
    }, 3000);
  }
}

// Start button clicked
function startWish() {
  const name = nameInput.value.trim();
  if (name !== "") {
    // 🎵 Play background music
    const music = document.getElementById("bg-music");
    if (music) {
      music.play().catch((error) => {
        console.log("Autoplay error:", error);
      });
    }

    namePage.classList.add("hidden");
    wishPage.classList.remove("hidden");
    typeWriter();
  } else {
    alert("Please enter a name first!");
  }
}


// OPTIONAL: Add rotating photos later
function showPhotos() {
  const ring = document.querySelector(".photo-ring");

  // When you get the images of Laksha, replace these teddy URLs
  const images = [
  "laksha1.jpg",
  "laksha2.jpg",
  "laksha3.jpg",
  "laksha4.jpg",
  "laksha5.jpg",
  "laksha6.jpg"
  ];

  const angle = 360 / images.length;

  images.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    const rotate = angle * i;
    const radius = 220;
    const x = Math.cos((rotate * Math.PI) / 180) * radius + 115;
    const y = Math.sin((rotate * Math.PI) / 180) * radius + 115;
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    ring.appendChild(img);
  });
}
