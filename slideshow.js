const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const info = document.querySelector('#info');
const start = document.querySelector('#start');
const place = document.getElementById('place');

var x = (place.childNodes.length-1)/2 +1;
start.addEventListener('click', (event) => {

console.log(x)
start.style.display = "none";
next.style.display = "block";
prev.style.display = "block";
info.style.display = "block";
document.querySelector(".switch").style.display = "block";
place.children[0].classList.add('current')
place.children[1].classList.add('current2')
place.children[0].setAttribute('visible', 'true')
place.children[1].setAttribute('visible', 'true')

const slides = document.querySelectorAll('.slide');
const slides2 = document.querySelectorAll('.slide2');

const auto = true; //Auto Scroll
var j = 0;
const intervalTime = 214748364;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  const current2 = document.querySelector('.current2');
  // Remove current class
  current.classList.remove('current');
  current2.classList.remove('current2');
  place.children[j].setAttribute('visible', 'false')
  place.children[j+1].setAttribute('visible', 'false')
  // Check for next slide
  if (current.nextElementSibling.nextElementSibling) {
  // Add current to next sibling
  current.nextElementSibling.nextElementSibling.classList.add('current');
  current2.nextElementSibling.nextElementSibling.classList.add('current2');
  j+=2;
  place.children[j].setAttribute('visible', 'true')
  place.children[j+1].setAttribute('visible', 'true')
} else {
  // Add current to start
  slides[0].classList.add('current');
  slides2[0].classList.add('current2');
   j=0;
   place.children[j].setAttribute('visible', 'true')
   place.children[j+1].setAttribute('visible', 'true')
 }
 setTimeout(() => current.classList.remove('current'));
 setTimeout(() => current2.classList.remove('current2'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  const current2 = document.querySelector('.current2');
  // Remove current class
  current.classList.remove('current');
  current2.classList.remove('current2');
  place.children[j].setAttribute('visible', 'false')
  place.children[j+1].setAttribute('visible', 'false')
  // Check for prev slide
  if (current2.previousElementSibling.previousElementSibling) {
  // Add current to prev sibling
  current.previousElementSibling.previousElementSibling.classList.add('current');
  current2.previousElementSibling.previousElementSibling.classList.add('current2');
      j-=2;
  place.children[j].setAttribute('visible', 'true')
  place.children[j+1].setAttribute('visible', 'true')
} else
{
  // Add current to last
  slides[slides.length -1].classList.add('current');
  slides2[slides2.length -1].classList.add('current2');
  j = x-3;
  place.children[j].setAttribute('visible', 'true')
  place.children[j+1].setAttribute('visible', 'true')
 }
 setTimeout(() => current.classList.remove('current'));
 setTimeout(() => current2.classList.remove('current2'));
};

// STEP
var step = document.getElementById('info');
step.innerHTML = "Step "+ 1  + " of " + slides.length;
var sum = 0;
// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    sum = j/2 +1;
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
    step.innerHTML = "Step "+ sum  + " of " + slides.length;
  }
});
prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    sum = j/2 +1;
    step.innerHTML = "Step "+ sum + " of " + slides.length;
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}

});


var checkbox = document.querySelector('#checkbox1');

    checkbox.addEventListener('change', function() {
      const place = document.getElementById('place');
      if (checkbox.checked) {
        next.style.display = "none";
        prev.style.display = "none";
        info.style.display = "none";

        for(let i= 0; i< x; i++)
        place.children[i].setAttribute('visible', 'true')
      }


      else{

          next.style.display = "block";
          prev.style.display = "block";
          info.style.display = "block";
        for(let i= 0; i< x; i++)
      {   if(place.children[i].classList.contains('current'))
              place.children[i].setAttribute('visible', 'true')
          else if(place.children[i].classList.contains('current2'))
              place.children[i].setAttribute('visible', 'true')
          else
          place.children[i].setAttribute('visible', 'false')
      }

      }


    })
