/* login verification */

const form = document.getElementById("loginForm");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault(); // stop page reload

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // any input is valid (for now)
        if(username !== "" && password !== ""){
            window.location.href = "pages/home.html";
        }
        else{
            alert("Please enter username and password.");
        }
    });
}