/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * Ian Liu
 */

/** namespace. */
var rhit = rhit || {};

/* Main */
/** function and class syntax examples */

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

rhit.main = function () {
    console.log("Ready");
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
    });
    console.log("object1");

};

rhit.main();