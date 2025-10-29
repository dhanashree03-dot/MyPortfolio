 document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS with your public key
   emailjs.init('HiHevs9fv3eCcInGB');
 // Replace with your public key from EmailJS dashboard

    // Get the contact form by selecting the only <form> inside #contact .container
    var contactSection = document.querySelector("#contact .container");
    var contactForm = contactSection.querySelector("form");

    // Attach the email sending code to the form submit event
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Stop default mailto action

      emailjs.sendForm("service_aa01dqh", "template_xhkvhed", contactForm)
        .then(function () {
          alert("Message sent successfully!");
          contactForm.reset();
        }, function (error) {
          alert("Failed to send message:\n" + error.text);
        });
    });
  });