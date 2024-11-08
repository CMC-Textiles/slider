// let currentSlide = 0;

// function changeSlide(direction) {
//     const slides = document.querySelector(".slides");
//     const totalSlides = slides.children.length;

//     currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
//     slides.style.transform = `translateX(-${currentSlide * 100}%)`;
// }


let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelector(".slides");
    const totalSlides = slides.children.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function openGallery() {
    document.getElementById("popupOverlay").style.display = "flex";
}

function closeGallery() {
    document.getElementById("popupOverlay").style.display = "none";
}

function selectImage(index) {
    currentSlide = index;
    changeSlide(0); // Update slider position
    closeGallery(); // Close the popup
}


function downloadPDF() {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = "pdf.pdf"; // Path to the PDF file
    link.download = "YourFileName.pdf"; // Filename for the downloaded file
    link.click(); // Trigger the download
}


// ======================= loder
// script.js

window.addEventListener('load', () => {
    // Hide the preloader
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';

    // Show the main content
    const content = document.getElementById('content');
    content.style.display = 'block';
});
