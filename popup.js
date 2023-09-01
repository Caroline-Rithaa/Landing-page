// JavaScript to show and hide the signup form popup
document.addEventListener("DOMContentLoaded", function () {
    const signupPopup = document.getElementById("signupPopup");
    const closePopup = document.getElementById("closePopup");
    const showSignup = document.getElementById("showSignup");

    showSignup.addEventListener("click", function (event) {
        event.preventDefault();
        signupPopup.style.display = "block";
    });

    closePopup.addEventListener("click", function () {
        signupPopup.style.display = "none";
    });
});
