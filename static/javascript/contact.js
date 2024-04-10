document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById("inputName").value;
    const email = document.getElementById("inputEmail").value;
    const phone = document.getElementById("inputPhone").value;
    const message = document.getElementById("inputMessage").value;

    // Display submitted values
    displayFeedback(name, email, phone, message);
  });

  function displayFeedback(name, email, phone, message) {
    const feedbackContainer = document.createElement("div");
    feedbackContainer.classList.add("feedback-container");

    feedbackContainer.innerHTML = `
            <h3>Feedback</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;

    // Append feedback to the page
    document.body.appendChild(feedbackContainer);
  }
});
