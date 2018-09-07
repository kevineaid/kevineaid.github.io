    
    $(document).ready(function(){
         
    	$(window).scroll(function (event) {
            var y = $(this).scrollTop();
            if (y >= 655) {   
                $('#layer').addClass('none');   
            }else {
                $('#layer').removeClass('none');
            }
            if (y >= 630) {
                $('.main-navbar').addClass('main-navbar-active');     
            }else {
            	$('.main-navbar').removeClass('main-navbar-active');   	
            }
            if (y >= 930){
            	$('.nav-no-color').addClass('color-nav');                         
            	$('.navbar-brand').addClass('navbar-brand-wh-logo');                         
            }
            else {
            	$('.nav-no-color').removeClass('color-nav');
            	$('.navbar-brand').removeClass('navbar-brand-wh-logo');
            }
            if (y >= 1400){
                $('.nav-no-color').removeClass('color-nav');                         
                $('.navbar-brand').removeClass('navbar-brand-wh-logo');                         
            }
            else {
                
            }

            if (y >= 200){                
                $('.featured').addClass('featured-active'); 
            }else {}

            if (y >= 350){                
                $('.s-one').addClass('single-project-active'); 
            }else {}            
            if (y >= 500){                
                $('.s-two').addClass('single-project-active'); 
            }else {}
            if (y >= 650){                
                $('.s-three').addClass('single-project-active'); 
            }else {}
            if (y >= 700){                
                $('.s-four').addClass('single-project-active'); 
            }else {}


            if (y >= 900){
                setTimeout("$('.myid').addClass('myid-active');",500);                 
                 
            }else {}

            if (y >= 1100){ 
                setTimeout("$('.mydesc-wrapper').addClass('mydesc-wrapper-active');",500);               
                                 
            }else {}

             if (y >= 1500){                
                $('.button-id').addClass('button-id-active'); 
            }else {}



            if (y >= 1000){                
                $('#main-bg-header').addClass('hideshow'); 
                $('body').addClass('contact'); 
            }else {
                $('#main-bg-header').removeClass('hideshow');
                $('body').removeClass('contact'); 
            }


             if (y >= 1700){           
                setTimeout("$('.contact-wrapper h2.before').addClass('active');",500);     
                 
            }else {}

             if (y >= 1800){                
                setTimeout("$('.contact-det').addClass('contact-det-active');",400);     
                
            }else {}
            if (y >= 1900){       
                setTimeout("$('.contact-logo').addClass('contact-logo-active');",900);          
                 
            }else {}

            
        });
                                
    });
   