const modal1 = document.querySelector('#modal1');
const modal2 = document.querySelector('#modal2');
const overlay = document.querySelector('#overlay');
const sharemyprofile = document.querySelector('#shareMyProfile');
const follow = document.querySelector('#followbtn');
const crossModal1 = document.querySelector('#closeIcon1');
const crossModal2 = document.querySelector('#closeIcon2');

function Modal1activate(){
    overlay.classList.add('activateOverlay');
    modal1.classList.add('activateModal1');
}

function Modal2activate(){
    overlay.classList.add('activateOverlay');
    modal2.classList.add('activateModal2');
}

function Modaldeactivate(){
    overlay.classList.remove('activateOverlay');
    modal1.classList.remove('activateModal1');
    modal2.classList.remove('activateModal2');
}

sharemyprofile.addEventListener('click',Modal1activate);
follow.addEventListener('click',Modal2activate);
overlay.addEventListener('click',Modaldeactivate);
crossModal1.addEventListener('click',Modaldeactivate);
crossModal2.addEventListener('click',Modaldeactivate);