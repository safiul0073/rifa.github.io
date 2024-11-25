/** @format */

document.querySelectorAll(".folder").forEach((folder) => {
    folder.addEventListener("click", (e) => {
        e.stopPropagation(); 
        folder.classList.toggle("expanded");

        const ul = folder.querySelector("ul");
        if (ul) {
            ul.style.display = ul.style.display === "none" ? "block" : "none";
        }
    });
});

document.querySelectorAll(".folder ul").forEach((ul) => {
    ul.style.display = "none";
});
