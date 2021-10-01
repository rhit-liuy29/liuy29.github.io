var rhit = rhit || {};

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("Ready");
    console.log(localStorage.getItem("darkMode"));
    const button = document.querySelector(".lightSwitch");
    if (localStorage.getItem("darkMode")) {
        document.querySelector("body").classList.add("dark");
        button.innerHTML = "Light Mode";
    } else {
        document.querySelector("body").classList.remove("dark");
        button.innerHTML = "Dark Mode";
    }
});

rhit.main = function(){
    const button = document.querySelector(".lightSwitch");
    button.addEventListener("click", (event) => {
        if (document.querySelector("body").classList.contains("dark")) {
            document.querySelector("body").classList.remove("dark");
            button.innerHTML = "Dark Mode";
            localStorage.clear();
        } else {
            document.querySelector("body").classList.add("dark");
            button.innerHTML = "Light Mode";
            localStorage.setItem("darkMode", true);
        }
    })
    console.log("object3");
}

rhit.main();