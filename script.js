
const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

const feedback = document.getElementById("feedback");
const wordCount = document.getElementById("wordCount");

feedback.addEventListener("input", () => {
  const words = feedback.value.split(/\s+/).filter(word => word.length > 0);
  wordCount.textContent = `${feedback.value.length} / 1000`;
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const feedbackText = document.getElementById("feedback").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  if (!name || !emailRegex.test(email) || !phoneRegex.test(phone) || !feedbackText) {
    alert("Please fill all fields correctly.");
    return;
  }

  const formData = {
    name,
    email,
    phone,
    feedback: feedbackText
  };

  localStorage.setItem("contactFormData", JSON.stringify(formData));
  alert("Form submitted successfully!");
  form.reset();
  wordCount.textContent = "0 / 1000";
});
