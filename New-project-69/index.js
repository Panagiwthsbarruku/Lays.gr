const sideImages = document.querySelectorAll('.side-images img');
const body = document.body;

sideImages.forEach(image => {
    image.addEventListener('click', () => {
        const color = image.dataset.color;
        console.log("Image clicked, color:", color); // Προσθέστε αυτήν τη γραμμή
        body.style.backgroundColor = color;
    });
});
