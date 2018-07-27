var btns = document.querySelector('ul');
var portfolio = document.querySelector('h1');
btns.addEventListener('click', function(e){
  e.stopPropagation();
  if(e.target.textContent === "Bio" || e.target.textContent === "Experience" || e.target.textContent === "Projects" ){
    var last = document.getElementsByClassName('active');
    last[0].className = 'btn';
    e.target.className += ' active';
  }
});
