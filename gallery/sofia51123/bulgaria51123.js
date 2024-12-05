// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Full-width images
function one() {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "100%";  // IE10
        elements[i].style.flex = "100%";
    }
}

// Two images side by side
function two() {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "50%";  // IE10
        elements[i].style.flex = "50%";
    }
}

// Four images side by side
function four() {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "25%";  // IE10
        elements[i].style.flex = "25%";
    }
}

// Add active class to the current button (highlight it)
function highlightActiveButton() {
    var header = document.getElementById("myHeader");
    if (!header) return;

    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            if (current.length > 0) { 
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
        });
    }

    // Ensure only the third button is active
    if (btns.length > 2) {
        // Remove active class from all buttons
        for (var j = 0; j < btns.length; j++) {
            btns[j].className = btns[j].className.replace(" active", "");
        }
        // Add active class to the third button
        btns[2].className += " active";
    }
}

function generateGallery() {
    const totalImages = 87;
    const imagesPerColumn = Math.ceil(totalImages / 4);
    let gallery = document.querySelector('.row');
    if (!gallery) return;

    gallery.innerHTML = '';

    for (let i = 1; i <= totalImages; i++) {
        let imagePath = `/HTML-CSS-WEBSITE/images/albums/SofiaTrip1/Sofia51123 (${i}).jpeg`;

        let imgElement = document.createElement('img');
        imgElement.src = imagePath;
        imgElement.addEventListener('click', function() {
            this.classList.toggle('scale-on-click');
        });

        let column = gallery.children[Math.floor((i - 1) / imagesPerColumn)];
        if (!column) {
            column = document.createElement('div');
            column.className = 'column';
            gallery.appendChild(column);
        }
        column.appendChild(imgElement);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    generateGallery();
    highlightActiveButton();
    four(); // Set the default layout to four columns
});
