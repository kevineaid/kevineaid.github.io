$(document).ready(function() {
    $("#loader").fadeOut(600); //
    //$("#loader").hide(); //

    TweenMax.to(".overlay h1", 2, {
	    opacity: 0,
	    y: -120,
	    ease: Expo.easeInOut
	})

	TweenMax.to(".overlay", 2, {
	    delay: 1,
	    top: "-100%",
	    ease: Expo.easeInOut
	})

	TweenMax.from(".logo", 1, {
	    delay: 2.4,
	    opacity: 0,
	    y: 20,
	    ease: Expo.easeInOut
	})

	TweenMax.staggerFrom(".main-navbar ul li", 1, {
	    delay: 2.4, opacity: 0, y: 20, ease: Expo.easeInOut
	}, 0.3)

	TweenMax.staggerFrom(".social-media ul li", 1, {
	    delay: 2.4, opacity: 0, y: 20, ease: Expo.easeInOut
	}, 0.3)

	TweenMax.from(".side-strip", 2, {
	    delay: 2.4,
	    opacity: 0,
	    y: 40,
	    ease: Expo.easeInOut
	})

	TweenMax.from(".row", 2, {
	    delay: 2.4,
	    opacity: 0,
	    x: 40,
	    ease: Expo.easeInOut
	})

	/*TweenMax.from(".row h6", 2, {
	    delay: 3,
	    opacity: 0,
	    y: 40,
	    ease: Expo.easeInOut
	})

	TweenMax.from(".row p", 2, {
	    delay: 3.4,
	    opacity: 0,
	    y: 20,
	    ease: Expo.easeInOut
	})*/

	TweenMax.staggerFrom(".bottom-bar .col-lg-4", 2, {
	    delay: 3, opacity: 0, y: 20, ease: Expo.easeInOut
	}, 0.3)

	TweenMax.from(".header h1", 2, {
	    delay: 2.4,
	    opacity: 0,
	    y: 20,
	    ease: Expo.easeInOut
	})

	TweenMax.from(".header p", 2, {
	    delay: 2.8,
	    opacity: 0,
	    y: 20,
	    ease: Expo.easeInOut
	})

	TweenMax.from(".header button", 2, {
	    delay: 3.2,
	    opacity: 0,
	    y: 20,
	    ease: Expo.easeInOut
	})
});
