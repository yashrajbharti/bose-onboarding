// Get modal element
var modal = document.getElementById('simpleModal');
var modalB = document.getElementById('simpleModalB');
var modalC = document.getElementById('simpleModalC');
var modalD = document.getElementById('simpleModalD');
var modalE = document.getElementById('simpleModalE');

// Get open modal button
var modalBtn = document.getElementById('modalBtn');
var modalBtnB = document.getElementById('modalBtnB');
var modalBtnC = document.getElementById('modalBtnC');
var modalBtnD = document.getElementById('modalBtnD');
var modalBtnE = document.getElementById('modalBtnE');

// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
var closeBtnB = document.getElementsByClassName('closeBtnB')[0];
var closeBtnC = document.getElementsByClassName('closeBtnC')[0];
var closeBtnD = document.getElementsByClassName('closeBtnD')[0];
var closeBtnE = document.getElementsByClassName('closeBtnE')[0];

// Get close 2 button


// Listen for open click
modalBtn.addEventListener('click',openModal);
modalBtnB.addEventListener('click',openModalB);
modalBtnC.addEventListener('click',openModalC);
modalBtnD.addEventListener('click',openModalD);
modalBtnE.addEventListener('click',openModalE);

// Listen for close click
closeBtn.addEventListener('click',closeModal);
closeBtnB.addEventListener('click',closeModalB);
closeBtnC.addEventListener('click',closeModalC);
closeBtnD.addEventListener('click',closeModalD);
closeBtnE.addEventListener('click',closeModalE);

//Listen for outside click
window.addEventListener('click',outsideClick);

// Function to open modal
function openModal(){
  modal.style.display = 'block';
}
function openModalB(){
  modalB.style.display = 'block';
}
function openModalC(){
  modalC.style.display = 'block';
}
function openModalD(){
  modalD.style.display = 'block';
}
function openModalE(){
  modalE.style.display = 'block';
}
// Function to close modal
function closeModal(){
  modal.style.display = 'none';
}
function closeModalB(){
  modalB.style.display = 'none';
}
function closeModalC(){
  modalC.style.display = 'none';
}
function closeModalD(){
  modalD.style.display = 'none';
}
function closeModalE(){
  modalE.style.display = 'none';
}
// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
  modal.style.display = 'none';
  }

  if(e.target == modalB){
  modalB.style.display = 'none';
}
  if(e.target == modalC){
  modalC.style.display = 'none';
  }


  if(e.target == modalD){
  modalD.style.display = 'none';
  }


  if(e.target == modalE){
  modalE.style.display = 'none';
  }
}
