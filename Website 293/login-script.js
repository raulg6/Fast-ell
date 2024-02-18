// Select element with id forms in a var
const forms = document.querySelector(".forms");

// Select all elements with id eye-icon in a var
const pwShowHide = document.querySelectorAll(".eye-icon");

// Select all elements with id link in a var
const links = document.querySelectorAll(".link");

// Loop through each eye-icon element
pwShowHide.forEach(eyeIcon => {
    // Add a click event listener to eye-icon element
    eyeIcon.addEventListener("click", () => {
        // Select all password fields in the main elements of current eye-icon
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        // Loop through each password field
        pwFields.forEach(password => {
            // check if password field type is currently password
            if (password.type === "password") {
                // If it is, change type to text to show the password
                password.type = "text";
                // Replace the id bx-hide with bx-show in the eye-icon element id list
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return; // Exit the loop 
            }
            // If the password field type isn't password, change back to password
            password.type = "password";
            // Replace the id bx-show with bx-hide in the eye-icon element's class list
            eyeIcon.classList.replace("bx-show", "bx-hide");
        });
    });
});

// Loop through each link element
links.forEach(link => {
    // Add a click event listener to link element
    link.addEventListener("click", e => {
        // keep from submitting
        e.preventDefault();
        forms.classList.toggle("show-signup");
    })
})