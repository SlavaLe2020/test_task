/* Я комментарий, который ждал тебя здесь. Удали меня и напиши хороший код! */
$(function(){

$('.collapsible__action--hidden').on('click', function(){
    $('.collapsible__content').addClass('active'); 
 })

 $('.collapsible__action--visible').on('click', function(){
     $('.collapsible__content').removeClass('active'); 
  })

});