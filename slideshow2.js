const next2 = document.querySelector('#next2');
const prev2 = document.querySelector('#prev2');
const info2 = document.querySelector('#info2');
const start2 = document.querySelector('#start2');
const newplace = document.getElementById('newplace');

var x2 = (newplace.childNodes.length-1)/2 +1;
start2.addEventListener('click', (event) => {

console.log(x2)
start2.style.display = "none";
next2.style.display = "block";
prev2.style.display = "block";
info2.style.display = "block";
document.querySelector(".switch2").style.display = "block";
newplace.children[0].classList.add('current3')
newplace.children[1].classList.add('current4')
newplace.children[0].setAttribute('visible', 'true')
newplace.children[1].setAttribute('visible', 'true')

const slides3 = document.querySelectorAll('.slide3');
const slides4 = document.querySelectorAll('.slide4');

const auto2 = true; //Auto Scroll
var j2 = 0;
const intervalTime2 = 214748364;
let slideInterval2;

const nextSlide2 = () => {
  // Get current class
  const current3 = document.querySelector('.current3');
  const current4 = document.querySelector('.current4');
  // Remove current class
  current3.classList.remove('current3');
  current4.classList.remove('current4');
  newplace.children[j2].setAttribute('visible', 'false')
  newplace.children[j2+1].setAttribute('visible', 'false')
  // Check for next slide
  if (current3.nextElementSibling.nextElementSibling) {
  // Add current to next sibling
  current3.nextElementSibling.nextElementSibling.classList.add('current3');
  current4.nextElementSibling.nextElementSibling.classList.add('current4');
  j2+=2;
  newplace.children[j2].setAttribute('visible', 'true')
  newplace.children[j2+1].setAttribute('visible', 'true')
} else {
  // Add current to start
  slides3[0].classList.add('current3');
  slides4[0].classList.add('current4');
   j2=0;
   newplace.children[j2].setAttribute('visible', 'true')
   newplace.children[j2+1].setAttribute('visible', 'true')
 }
 setTimeout(() => current3.classList.remove('current3'));
 setTimeout(() => current4.classList.remove('current4'));
};

const prevSlide2 = () => {
  // Get current class
  const current3 = document.querySelector('.current3');
  const current4 = document.querySelector('.current4');
  // Remove current class
  current3.classList.remove('current3');
  current4.classList.remove('current4');
  newplace.children[j2].setAttribute('visible', 'false')
  newplace.children[j2+1].setAttribute('visible', 'false')
  // Check for prev slide
  if (current4.previousElementSibling.previousElementSibling) {
  // Add current to prev sibling
  current3.previousElementSibling.previousElementSibling.classList.add('current3');
  current4.previousElementSibling.previousElementSibling.classList.add('current4');
      j2-=2;
  newplace.children[j2].setAttribute('visible', 'true')
  newplace.children[j2+1].setAttribute('visible', 'true')
} else
{
  // Add current to last
  slides3[slides3.length -1].classList.add('current3');
  slides4[slides4.length -1].classList.add('current4');
  j2 = x2-3;
  newplace.children[j2].setAttribute('visible', 'true')
  newplace.children[j2+1].setAttribute('visible', 'true')
 }
 setTimeout(() => current3.classList.remove('current3'));
 setTimeout(() => current4.classList.remove('current4'));
};

// STEP
var step2 = document.getElementById('info2');
step2.innerHTML = "Step "+ 1  + " of " + slides3.length;
var sum2 = 0;
// Button events
next2.addEventListener('click', e => {
  nextSlide2();
  if (auto2) {
    sum2 = j2/2 +1;
    clearInterval(slideInterval2);
    slideInterval2 = setInterval(nextSlide2, intervalTime2);
    step2.innerHTML = "Step "+ sum2  + " of " + slides3.length;
  }
});
prev2.addEventListener('click', e => {
  prevSlide2();
  if (auto2) {
    sum2 = j2/2 +1;
    step2.innerHTML = "Step "+ sum2 + " of " + slides3.length;
    clearInterval(slideInterval2);
    slideInterval2 = setInterval(nextSlide2, intervalTime2);
  }
});

// Auto slide
if (auto2) {
  // Run next slide at interval time
  slideInterval2 = setInterval(nextSlide2, intervalTime2);
}

});


var checkbox2 = document.querySelector('#checkbox2');

    checkbox2.addEventListener('change', function() {
      const newplace = document.getElementById('newplace');
      if (checkbox2.checked) {
        next2.style.display = "none";
        prev2.style.display = "none";
        info2.style.display = "none";

        for(let i= 0; i< x2; i++)
        newplace.children[i].setAttribute('visible', 'true')
      }


      else{

          next2.style.display = "block";
          prev2.style.display = "block";
          info2.style.display = "block";
        for(let i= 0; i< x2; i++)
      {   if(newplace.children[i].classList.contains('current3'))
              newplace.children[i].setAttribute('visible', 'true')
          else if(newplace.children[i].classList.contains('current4'))
              newplace.children[i].setAttribute('visible', 'true')
          else
          newplace.children[i].setAttribute('visible', 'false')
      }

      }


    })
