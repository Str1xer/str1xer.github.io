$(document).ready(function() {
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
        if( scroll <= 50 ) {     
            $('#header').css({'height':'150px'});
            $('.navHeader').css({'margin-top':'115px'});
            $('.logo').css({'margin-top': '0px'});
            $('.name').css({'left': '15px'});
            $('.hiddenLogo').css({'left':'-100px'})
        }   
        else {
            $('#header').css({'height':'50px'});
            $('.navHeader').css({'margin-top':'15px'});
            $('.logo').css({'margin-top': '-100px'});
            $('.name').css({'left': '60px'});
            $('.hiddenLogo').css({'left':'0px'})
        }   
    });
})

function firstSlide(){
    $('.one').css({'left':'0px', 'z-index': '6'});
    $('.two').css({'left':'1320px', 'z-index': '5'});
    $('.three').css({'left':'-1320px', 'z-index': '4'});
    $('.krug1').css({'background': '#ECECEC'});
    $('.krug2').css({'background': 'rgba(0, 0, 0, 0)'});
    $('.krug3').css({'background': 'rgba(0, 0, 0, 0)'});
    slide=1;
}
function secondSlide(){
    $('.one').css({'left':'-1320px', 'z-index': '5'});
    $('.two').css({'left':'0px', 'z-index': '6'});
    $('.three').css({'left':'1320px', 'z-index': '4'});
    $('.krug2').css({'background': '#ECECEC'});
    $('.krug3').css({'background': 'rgba(0, 0, 0, 0)'});
    $('.krug1').css({'background': 'rgba(0, 0, 0, 0)'});
    slide=2;
}
function thirdSlide(){
    $('.one').css({'left':'1320px', 'z-index': '5'});
    $('.two').css({'left':'-1320px', 'z-index': '4'});
    $('.three').css({'left':'0px', 'z-index': '6'});
    $('.krug3').css({'background': '#ECECEC'});
    $('.krug2').css({'background': 'rgba(0, 0, 0, 0)'});
    $('.krug1').css({'background': 'rgba(0, 0, 0, 0)'});
    slide=3;
}

slide = 0;

function next() {
    var i;
    var delay=-15000;
    for (i = 0; i < 5000; i++) { 
        delay=delay+15000;
        if (slide=3) {
            setTimeout(firstSlide,delay);
        }
        delay=delay+15000;
        if(slide=1) {
            setTimeout(secondSlide,delay);
        }
        delay=delay+15000;
        if (slide=2) {
            setTimeout(thirdSlide,delay);
        }
    }
}