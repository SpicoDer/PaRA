const menu = document.querySelector('.icon-menu');
const closeIcon = document.querySelector('.icon-close');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', function () {
  navLinks.classList.toggle('open');
  menu.classList.toggle('open');
  closeIcon.classList.toggle('open');
});

closeIcon.addEventListener('click', function () {
  navLinks.classList.toggle('open');
  menu.classList.toggle('open');
  closeIcon.classList.toggle('open');
});

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 14.9546886, lng: 120.910974 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 15,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
