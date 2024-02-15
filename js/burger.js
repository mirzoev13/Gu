document.querySelector(".burger").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".nav2").classList.toggle("open");
})