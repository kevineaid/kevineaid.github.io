$(document).ready(function(){

    //Nav Toggle Button 
    $('.nav-toggle').click(function(){
        $(this).toggleClass('nav-toggle-clicked');
        $('.sidebar-nav').toggleClass('nav-showed');
    }); 
    
});