// script.js

// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.add("active");
});

document.querySelector(".close-menu").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.remove("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.remove("active");
  });
});

// Back to top button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("active");
  } else {
    backToTopButton.classList.remove("active");
  }
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Animate skill bars when they come into view
const skillBars = document.querySelectorAll(".skill-progress");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute("data-width");
        entry.target.style.width = width;
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

skillBars.forEach((bar) => {
  observer.observe(bar);
});

// Form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById("submit-btn");
    const btnText = document.getElementById("btn-text");
    const btnLoading = document.getElementById("btn-loading");
    const formMessage = document.getElementById("form-message");

    // Show loading state
    btnText.textContent = "Sending...";
    btnLoading.classList.remove("hidden");
    submitBtn.disabled = true;

    // Simulate form submission (in a real scenario, you would send to a server)
    setTimeout(() => {
      // Reset form
      document.getElementById("contact-form").reset();

      // Show success message
      formMessage.textContent =
        "Thank you! Your message has been sent successfully.";
      formMessage.classList.remove("hidden");
      formMessage.classList.add("bg-green-100", "text-green-700");

      // Reset button
      btnText.textContent = "Send Message";
      btnLoading.classList.add("hidden");
      submitBtn.disabled = false;

      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.classList.add("hidden");
      }, 5000);
    }, 2000);
  });

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Add animation to elements when they come into view
const animatedElements = document.querySelectorAll(
  ".animate-slide-up, .animate-fade-in"
);

const elementObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        elementObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

animatedElements.forEach((el) => {
  // Pause animation initially
  el.style.animationPlayState = "paused";
  elementObserver.observe(el);
});

// WhatsApp Send Functionality - WORKING SOLUTION
document
  .getElementById("direct-send-btn")
  .addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const directBtn = document.getElementById("direct-send-btn");
    const directBtnText = document.getElementById("direct-btn-text");
    const directBtnLoading = document.getElementById("direct-btn-loading");
    const formMessage = document.getElementById("form-message");

    // Validate form
    if (!name || !email || !subject || !message) {
      formMessage.textContent = "Please fill in all fields before sending.";
      formMessage.classList.remove("hidden");
      formMessage.classList.add("bg-red-100", "text-red-700");
      setTimeout(() => {
        formMessage.classList.add("hidden");
      }, 5000);
      return;
    }

    // Show loading state
    directBtnText.textContent = "Opening WhatsApp...";
    directBtnLoading.classList.remove("hidden");
    directBtn.disabled = true;

    // Create WhatsApp message
    const whatsappMessage = `Hello Vanshika!%0A%0AName: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}%0A%0A(This message was sent from your portfolio website)`;

    // WhatsApp API link - YAHAN APNA NUMBER DALNA
    const whatsappLink = `https://wa.me/7206794451?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappLink, "_blank");

    // Show success message
    setTimeout(() => {
      formMessage.textContent = "WhatsApp opened! Please send the message.";
      formMessage.classList.remove("hidden");
      formMessage.classList.add("bg-green-100", "text-green-700");

      // Reset button
      directBtnText.textContent = "Send via WhatsApp";
      directBtnLoading.classList.add("hidden");
      directBtn.disabled = false;

      // Clear form after sending
      document.getElementById("contact-form").reset();

      setTimeout(() => {
        formMessage.classList.add("hidden");
      }, 5000);
    }, 1000);
  });

// Simple animation on scroll
document.addEventListener("DOMContentLoaded", function () {
  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll(".skill-progress");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const width = entry.target.style.width;
          entry.target.style.width = "0%";
          setTimeout(() => {
            entry.target.style.width = width;
          }, 300);
        }
      });
    },
    { threshold: 0.5 }
  );

  skillBars.forEach((bar) => {
    observer.observe(bar);
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});
