const modal1 = document.querySelector('#modal1');
const modal2 = document.querySelector('#modal2');
const modal3 = document.querySelector('#modal3');
const btn = document.querySelector('#openModal');

btn.onclick = function () {
    if( modal1.style.display === 'none'
        &&
        modal2.style.display === 'none'
        &&
        modal3.style.display === 'none')
    {
        modal1.style.display = 'flex';
        modal2.style.display = 'flex';
        modal3.style.display = 'flex';
    }
    else{
        modal1.style.display = 'none';
        modal2.style.display = 'none';
        modal3.style.display = 'none';
    };
  
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
