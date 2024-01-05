
var nav = document.getElementById('mySidenav');
var navlinks = nav.getElementsByTagName('a');
var navicon = document.getElementById('nav-icon');

/*
function toggleNav() {
    //(nav.classList.contains('active')) ? nav.classList.remove('active') : nav.classList.add('active');
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
      closeNav();
    } else {
      nav.classList.add('active');
      openNav();
    }
  }
*/

/* Set the width of the side navigation to 250px */
function openNav() {
  nav.style.width = "250px";
  nav.classList.add('active');
  //navicon.classList.add('active');
  navicon.style.display = "none";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  nav.style.width = "0";
  nav.classList.remove('active');
  //navicon.classList.remove('active');
  //navicon.style.width = "45px";
  navicon.style.display = "inline-block";
} 

document.getElementById('nav-icon').addEventListener('click', function(e) {
    e.preventDefault();
    //toggleNav();
    openNav();
});

for(var i = 0; i < navlinks.length; i++) {
  navlinks[i].addEventListener('click', function() {
    closeNav();
  });
}

document.addEventListener('keydown', (event) => {
  //const e = event || window.event;
  if (event.key === "Escape") { // Escape key
    closeNav();
  }
});

document.addEventListener('click', function (event) {
  
  if (!event.target.closest('#mySidenav') && !event.target.closest('#nav-icon')) {
    closeNav();
  }
}, false);
/**/