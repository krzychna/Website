var checkboxes = document.querySelectorAll('.square');
var checks = checkboxes.childNodes;

for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('click',function(e){
    this.childNodes[1].classList.toggle('checked');
    e.stopPropagation();
    });
}
