var cross = '<div class="cross"><div class="x1"></div><div class="x2"></div></div>';
var circ = '<div class="circle"><div class="c1"></div></div>';
var addCross = false;
var end = false;
var crosses = '';
var circles = '';
var winner = '';
var counter = 0;
var end = false;
$(function(){
  if (addCross) {
    $('span').text('Now turn: X');
  }else{
    $('span').text('Now turn: O');
  }
  $('.button').click(function(){
    end = false;
    counter = 0;
    circles = '';
    crosses = '';
    $('.field').html('');
    if (addCross) {
      $('span').text('Now turn: X');
    }else{
      $('span').text('Now turn: O');
    }
    setTimeout(function(){
      $('.button').slideUp();
    }, 500);
  })
  $('.field').click(function(e){
    checkIfEmpty(this)
    checkIfEnd();
  });
});

function change(f){
  if (addCross) {
    $(f).html(cross);
    $('span').text('Now turn: O');
    crosses += ($('.field').index(f));
    addCross = !addCross;
    counter++;
  }else {
    $(f).html(circ);
    $('span').text('Now turn: X');
    circles += ($('.field').index(f));
    addCross = !addCross;
    counter++;
  }
}
function checkIfEmpty(f){
  if ($(f).html() != '' || end) {
    $(f).addClass('rotate');
    setTimeout(function(){
      $(f).removeClass('rotate');
    }, 2000);
  }else {
    if (!end) {
      change(f);
    }
  }
}

function checkIfEnd(){
  for (var i = 0; i < 3; i++) {
    if (crosses.search((8+i*3)%9) !=-1 && crosses.search((9+i*3)%9) !=-1 && crosses.search((10+i*3)%9) !=-1 ||
        crosses.search((8+i)%9) !=-1 && crosses.search((11+i)%9) !=-1 && crosses.search((14+i)%9) !=-1  )
    {
      winner = 'Crosses';
      end = true;
    }
    if (circles.search((8+i*3)%9) !=-1 && circles.search((9+i*3)%9) !=-1 && circles.search((10+i*3)%9) !=-1 ||
    circles.search((8+i)%9) !=-1 && circles.search((11+i)%9) !=-1 && circles.search((14+i)%9) !=-1) {
      winner = 'Circles';
      end = true;
    }
  }
  if (crosses.search(8) != -1 && crosses.search(7) != -1 && crosses.search(3) != -1 ||
  crosses.search(1) != -1 && crosses.search(3) != -1 && crosses.search(5) != -1) {
    winner = 'Crosses';
    end = true;
  }
  if (circles.search(8) != -1 && circles.search(7) != -1 && circles.search(3) != -1||
  circles.search(1) != -1 && circles.search(3) != -1 && circles.search(5) != -1) {
    winner = 'Circles';
    end = true;
  }
  if (end) {
      $('span').text( winner + ' won!');
      $('.button').slideDown();
  }
  if (counter === 9 && !end) {
    $('span').text( 'Tie!');
    $('.button').slideDown();
  }
}
