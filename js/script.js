$(document).ready(function(){
    //listen for clicks on any h3 heading inside the footer links wrapper
    $('.footer-links-wrapper h3').click(function(){
        
        //ensure this interactivity only triggers on mobile devices (width < 768px)
        if ($(window).width() <= 768 ){
          
            //toggle the expanded class to flip between "+" and "x"
            $(this).toggleClass("expanded");

            //smoothly slides open or close the <ul> directly following the clicked <h3>
            $(this).next("ul").slideToggle();
        }
    });
});
