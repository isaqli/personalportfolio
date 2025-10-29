// create variables for button and hidden images
const expandBtn = document.getElementById('expandBtn');
const hiddenImages = document.querySelectorAll('.hidden');

expandBtn.addEventListener('click', () => {
    hiddenImages.forEach(img => {
        img.classList.toggle('hidden'); //toggle the visibility of the images
    });

    expandBtn.textContent = expandBtn.textContent === 'Show More' ? 'Show Less' : 'Show More';
});