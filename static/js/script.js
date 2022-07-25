const rocko = document.getElementById("rocko");
x=rocko.addEventListener("click", toggleRocko);

function toggleRocko() {
    if (rocko.style.display === "none") {
        rocko.style.display = "block";
    } else {
        rocko.style.display = "none";
    }
}
