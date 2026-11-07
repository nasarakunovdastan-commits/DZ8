const button = document.getElementById("themeButton");

let theme = localStorage.getItem("theme");

if (theme === "dark") {
    document.body.classList.add("dark");
}

button.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});