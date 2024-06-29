let images = document.getElementsByClassName("imageSection");

Array.from(images).forEach((image, index) => {
    image.addEventListener("click", () => {
        Array.from(images).forEach(img => img.style.width = "5vw");
        image.style.width = "40vw";
        let active = index;
    });
});

