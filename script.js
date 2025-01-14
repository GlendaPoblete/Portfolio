// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//EXPERIENCE//
function toggleContent(element) {
            const content = element.nextElementSibling;
            const arrow = element.querySelector('.arrow');

            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                arrow.innerHTML = '&#x25B2;'; // Up arrow
            } else {
                content.style.display = 'none';
                arrow.innerHTML = '&#x25BC;'; // Down arrow
            }
        }

        // Initialize all content sections to be collapsed
        document.querySelectorAll('.content').forEach(content => {
            content.style.display = 'none';
        });