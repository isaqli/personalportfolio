function expandButton(buttonId) {

    // create variables for button and hidden images
    const expandBtn = document.getElementById(buttonId);
    const hiddenImages = document.querySelectorAll('.hidden');

    expandBtn.addEventListener('click', () => {
        hiddenImages.forEach(img => {
            img.classList.toggle('hidden'); //toggle the visibility of the images
        });

        if (expandBtn.textContent === 'Show More') {
            expandBtn.textContent = 'Show Less'    
        } else {
            expandBtn.textContent = 'Show More';
        }
    });
}

expandButton('expandBtn1');
expandButton('expandBtn2');