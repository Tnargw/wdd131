/* Required "const" querySelectors*/
const menuButton = document.querySelector(".menu-button");
const menuItems = document.querySelector(".menu");

/* EventListener for button click */
menuButton.addEventListener("click", () => {
    menuItems.classList.toggle("show");
});


// Function to handle resize
function handleResize() {
    if (window.innerWidth > 1000){
        menuItems.classList.remove("hide");
        menuItems.classList.add("show");
    }
    else{
        menuItems.classList.add("hide");
        menuItems.classList.remove("show");
    }
}

// Viewer template
function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
}

function closeViewer() { 
    document.querySelector(".viewer").remove();
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const clickedImage = event.target;

	// get the src attribute from that element and 'split' it on the "-"
    const imgSrc = clickedImage.src.split("-")

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const fullSizeImg = imgSrc[0] + "-full.jpeg";

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullSizeImg, clickedImage.alt));

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.querySelector(".close-viewer").addEventListener("click", closeViewer)

}

/* .gallery listener */
document.querySelector(".gallery").addEventListener("click", viewHandler);



handleResize();
window.addEventListener("resize", handleResize);