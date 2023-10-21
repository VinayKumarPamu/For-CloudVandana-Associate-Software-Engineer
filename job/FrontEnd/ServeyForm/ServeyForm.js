// Function to handle form submission
function submitForm() {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const email = emailInput.value;

    const mobileInput = document.getElementById("mobileNumber");
    const mobileError = document.getElementById("mobile-error");
    const mobileNumber = mobileInput.value;

    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isValidMobile = /^[0-9]{10}$/.test(mobileNumber);

    if (!isValidEmail) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.color = "red";
        emailInput.focus();
        return false;
    }
    
    if (!isValidMobile) {
        mobileError.textContent = "Please enter a valid 10-digit mobile number.";
        mobileError.style.color = "red";
        mobileInput.focus();
        return false;
    }

    // If both email and mobile are valid, clear any previous error messages
    emailError.textContent = "";
    mobileError.textContent = "";

    // Your form data handling code here
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(e => e.value);
    const profession = document.getElementById("profession").value;

    const popupText = `
        First Name: ${firstName}
        Last Name: ${lastName}
        Date of Birth: ${dob}
        Country: ${country}
        Gender: ${gender.join(', ')}
        Profession: ${profession}
        Email: ${email}
        Mobile Number: ${mobileNumber}
    `;
    alert("Survey Form Submitted:\n\n" + popupText);

    // Reset the form
    document.getElementById("surveyForm").reset();

    return false; // Prevent the form from actually submitting
}
function uncheckOthers(checkedId) {
    const checkboxes = document.querySelectorAll('input[name="gender"]');
    checkboxes.forEach(checkbox => {
      if (checkbox.id !== checkedId) {
        checkbox.checked = false;
      }
    });
  }