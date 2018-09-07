<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Rowers Inc.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Site Description Here">
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
        <link href="css/stack-interface.css" rel="stylesheet" type="text/css" media="all" />
        <link href="css/socicon.css" rel="stylesheet" type="text/css" media="all" />
        <link href="css/lightbox.min.css" rel="stylesheet" type="text/css" media="all" />
        <link href="css/flickity.css" rel="stylesheet" type="text/css" media="all" />
        <link href="css/iconsmind.css" rel="stylesheet" type="text/css" media="all" />
        <link href="css/jquery.steps.css" rel="stylesheet" type="text/css" media="all" />
        <link href="css/theme.css" rel="stylesheet" type="text/css" media="all" />
        <link href="css/custom.css" rel="stylesheet" type="text/css" media="all" />
        <link href="css/main.css?v=<?php echo microtime(); ?>" rel="stylesheet" type="text/css" media="all" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,400i,500,600,700%7CMerriweather:300,300i" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="icon" href="img/favicon.png" type="image/png" sizes="32x32">
        <link rel="stylesheet" href="css/popup.css?v=<?php echo microtime(); ?>">
    </head>
    <body class=" ">


        <a id="start"></a>
        <div class="nav-container ">
            <div class="bar bar--md visible-xs">
                <div class="container">
                    <div class="row">
                        <div class="col-3 col-md-2">
                            <a href="index.html">
                                <img class="logo logo-dark" alt="logo" src="img/logo.png" />
                                <img class="logo logo-light" alt="logo" src="img/logo.png" />
                            </a>
                        </div>
                        <div class="col-9 col-md-10 text-right">
                            <a href="#" class="hamburger-toggle" data-toggle-class="#menu1;hidden-xs">
                                <i class="icon icon--sm stack-interface stack-menu"></i>
                            </a>
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </div>
            <!--end bar-->
            <nav id="menu1" class="bar bar-1 hidden-xs">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-1 col-md-2 hidden-xs">
                            <div class="bar__module">
                                <a href="index.html">
                                    <img class="logo logo-dark" alt="logo" src="img/logo.png" />
                                    <img class="logo logo-light" alt="logo" src="img/logo.png" />
                                </a>
                            </div>
                            <!--end module-->
                        </div>
                        <div class="col-lg-11 col-md-10 text-right text-left-xs text-right-sm text-right-md">
                            <div class="bar__module">
                                <ul class="menu-horizontal text-right">
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">Product</a>
                                    </li>
                                    <li>
                                        <a href="#">Work</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#">FAQ</a>
                                    </li>
                                    <li>
                                        <a class="btn btn--sm btn-disabled type--uppercase" href="#">
                                            <span class="btn__text">
                                                Action
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <!--end module-->
                            <!--end module-->
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </nav>
            <!--end bar-->
        </div>
        <div class="main-container">
            <div id="pop-up">
                <div class="pop-up-wrap">
                    <div class="trigger-pop" onclick="togglePop()">
                      <!-- <span class="line1"></span>
                      <span class="line2"></span>
                      <span class="line3"></span> -->
                      <h3>FREE DEMO REQUEST</h3>
                    </div>
                    <div class="popup-form">
                      <h3>FREE DEMO REQUEST</h3>
                      <form class="" action="index.html" method="post">
                        <input type="text" name="name" placeholder="Your name" value="">
                        <input type="text" name="number" placeholder="Mobile Number" value="">
                        <input type="email" name="email" placeholder="Email Address" value="">
                        <input type="text" name="city" placeholder="Your City" value="">
                        <input type="password" name="pin" placeholder="PIN Number" value="">
                        <input id="btn-demo" type="submit" name="" value="Request Demo">
                      </form>
                      <p>By signing up, you agree to the <a href="#"> Terms of Service</a></p>
                    </div>
                </div>
            </div>

            <div class="main-bg-wrapper">
                <div id="main-bg-header">
                    <img  src="img/banner2.jpg" />
                    <img  src="img/banner1.jpg" />
                    <img  src="img/banner2.jpg" />
                </div>
            </div>

            <section id="headline">
                <div class="container" >
                    <div class="d-flex align-items-center">
                        <div class="item">
                            <h1 class="heading">Heading 1 Here</h1>
                            <p class="subheading">Indoor living without fresh air poisons the blood and makes you sick. Have some fresh air and forget decaying of your body and mind.</p>
                            <!-- <p>Love the feeling of fresh air on your face and put some on your brain everyday</p> -->
                        </div>
                    </div>
                </div>
                
            </section>

            <section class="switchable switchable--switch feature-large border--bottom">
                <div class="container">
                    <div class="row justify-content-around">
                        <div class="col-md-6">
                            <div class="switchable__text">
                                <h2>Header 2</h2>
                                <p class="lead">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio pariatur quibusdam ullam impedit explicabo nulla, esse doloribus, reprehenderit at est autem.
                                </p>
                                <a href="#">Learn More &raquo;</a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-12 text-center">
                            <div class="slider" data-arrows="true">
                                <ul class="slides">
                                    <li><img alt="Image" src="img/product_image1.png" /></li>
                                    <li><img alt="Image" src="img/product_image1.png" /></li>
                                </ul>
                            </div>


                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </section>

            <section class="feature-large">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-12">
                            <div class="heading-block text-center">
                                <h2>Top Polluted City</h2>
                                <p class="lead">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum modi accusamus dolores dicta.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-5 col-md-12">
                            <div class="progress-horizontal progress-horizontal--sm">
                                <h2>example bar meter</h2>
                                <p class="progress-horizontal__label h5" style="margin-bottom:10px;">ITO, Delhi<span style="margin-left: 10px;font-size: 12px;background: #cc0033;color: #fff;padding: 0px 6px;font-weight: 700;border-radius: 2px;float:right;">Unhealthy</span></p>
                                <div class="progress-horizontal__bar" data-value="0" ><div class="progress-horizontal__progress" style="width:65%;background:#cc0033;"></div></div>
                                <p class="progress-horizontal__label h5">Air Pollution Index : <span style="margin-left: 10px;font-size: 13px;background: #cc0033;color: #fff;padding: 3px 6px;font-weight: 700;border-radius: 2px;">191</span> </p>

                            </div>

                            <div class="progress-horizontal progress-horizontal--sm">
                                <p class="progress-horizontal__label h5" style="margin-bottom:10px;">Talkatora, Lucknow <span style="margin-left: 10px;font-size: 12px;background: #009966;color: #fff;padding: 0px 6px;font-weight: 700;border-radius: 2px;float:right;">Good</span></p>
                                <div class="progress-horizontal__bar" data-value="0" ><div class="progress-horizontal__progress" style="width:10%;background:#009966;"></div></div>
                                <p class="progress-horizontal__label h5">Air Pollution Index : <span style="margin-left: 10px;font-size: 13px;background: #009966;color: #fff;padding: 3px 6px;font-weight: 700;border-radius: 2px;">40</span> </p>

                            </div>
                            <table class="border--round table--alternate-row">
                                <thead>
                                    <tr>
                                        <th>City</th>
                                        <th>Air Pollution Index</th>
                                    </tr>
                                </thead>
                                <tbody id="aqi" class="type--bold">

                                </tbody>
                            </table>
                            <p>*this data updated every one hour</p>
                        </div>
                        <div class="col-lg-7 col-md-12">
                            <h4>Air Pollution Level</h4>
                            <p class="type--bold">Air Quality Index scale as defined by the US-EPA 2016 standard</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><span style="background:#009966;color:#fff;padding: 5px 10px;font-weight:700;border-radius:4px;">Good</span></td>
                                        <td>
                                            Air quality is considered satisfactory, and air pollution poses little or no risk
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span style="background:#ffde33;color:#000000;padding: 5px 10px;font-weight:700;border-radius:4px;">Moderate</span></td>
                                        <td>
                                            Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="170px"><span style="background:#ff9933;color:#000000;padding: 5px 10px;font-weight:700;border-radius:4px;">Partly Unhealthy</span></td>
                                        <td>
                                            Unhealthy for Sensitive Groups, Members of sensitive groups may experience health effects. The general public is not likely to be affected.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span style="background:#cc0033;color:#fff;padding: 5px 10px;font-weight:700;border-radius:4px;">Unhealthy</span></td>
                                        <td>
                                            Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span style="background:#660099;color:#fff;padding: 5px 10px;font-weight:700;border-radius:4px;">Very Unhealthy</span></td>
                                        <td>
                                            Health warnings of emergency conditions. The entire population is more likely to be affected.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span style="background:#7e0023;color:#fff;padding: 5px 10px;font-weight:700;border-radius:4px;">Hazardous</span></td>
                                        <td>
                                            Health alert: everyone may experience more serious health effects
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </section>

            <!-- <section class="text-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-8">
                            <h2>Some Fear</h2>
                            <p class="lead">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quae adipisci ab dolorem veritatis!
                            </p>
                        </div>
                    </div>
                </div>
            </section> -->
            <section class=" bg--secondary">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-7">
                            <div class="heading-block text-center">
                                <h2>Blog or Feature</h2>
                                <p class="lead">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum modi accusamus dolores dicta.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 col-lg-3">
                            <div class="feature feature-1">
                                <img alt="Image" src="img/landing-25.jpg">
                                <div class="feature__body boxed boxed--border">
                                    <h5>Caption Text</h5>
                                    <p>
                                        Caption short description. Lorem ipsum dolor sit amet.
                                    </p>
                                    <a href="#">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            <!--end feature-->
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="feature feature-1">
                                <img alt="Image" src="img/landing-23.jpg">
                                <div class="feature__body boxed boxed--border">
                                    <h5>Caption Text</h5>
                                    <p>
                                        Caption short description. Lorem ipsum dolor sit amet.
                                    </p>
                                    <a href="#">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            <!--end feature-->
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="feature feature-1">
                                <img alt="Image" src="img/landing-22.jpg">
                                <div class="feature__body boxed boxed--border">
                                    <h5>Caption Text</h5>
                                    <p>
                                        Caption short description. Lorem ipsum dolor sit amet.
                                    </p>
                                    <a href="#">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            <!--end feature-->
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="feature feature-1">
                                <img alt="Image" src="img/landing-13.jpg">
                                <div class="feature__body boxed boxed--border">
                                    <h5>Caption Text</h5>
                                    <p>
                                        Caption short description. Lorem ipsum dolor sit amet.
                                    </p>
                                    <a href="#">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            <!--end feature-->
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </section>

            <section class="feature-large switchable ">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-lg-6 col-md-6">
                            <img alt="Image" class="border--round box-shadow-wide" src="img/cowork-9.jpg">
                        </div>
                        <div class="col-lg-5 col-md-6">
                            <div class="heading-block">
                                <h2>Why us</h2>
                            </div>
                            <div class="text-block">
                                <h5>Reason 1</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis recusandae, ratione repellendus cupiditate vero. Odio iure ipsum nesciunt voluptatem vel.
                                </p>
                            </div>
                            <div class="text-block">
                                <h5>Reason 2</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi totam quis quas culpa suscipit incidunt, dolorem in. Aliquam suscipit .
                                </p>
                            </div>
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </section>
            <section class=" ">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-6">
                            <a href="#" class="block">
                                <div class="feature feature-7 boxed text-center imagebg" data-overlay="3">
                                    <div class="background-image-holder" style="background: url(&quot;img/blog-1.jpg&quot;); opacity: 1;">
                                        <img alt="background" src="img/dust-cloud.jpg">
                                    </div>
                                    <h4 class="pos-vertical-center type--bold">DUST</h4>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 col-6">
                            <a href="#" class="block">
                                <div class="feature feature-7 boxed text-center imagebg" data-overlay="3">
                                    <div class="background-image-holder" style="background: url(&quot;img/blog-1.jpg&quot;); opacity: 1;">
                                        <img alt="background" src="img/dust-cloud.jpg">
                                    </div>
                                    <h4 class="pos-vertical-center type--bold">PATDENDER</h4>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 col-6">
                            <a href="#" class="block">
                                <div class="feature feature-7 boxed text-center imagebg" data-overlay="3">
                                    <div class="background-image-holder" style="background: url(&quot;img/blog-1.jpg&quot;); opacity: 1;">
                                        <img alt="background" src="img/dust-cloud.jpg">
                                    </div>
                                    <h4 class="pos-vertical-center type--bold">BACTERIA</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </section>

            <section class="text-center imagebg" data-overlay="6">
                <div class="background-image-holder" style="background: url(&quot;img/sample-hero.jpg&quot;); opacity: 1;">
                    <img alt="background" src="img/cowork-11.jpg">
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 col-lg-8">
                            <h1>Join Us!</h1>
                            <p class="lead">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad praesentium rerum, dolor, earum error! Magni corporis quisquam.
                            </p>
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </section>

            <section class="text-center ">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-8">
                            <h2>Our Happy Client</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 col-md-6 col-lg-3">
                            <div class="feature feature-1">
                                <img alt="Image" src="img/avatar-wide-4.jpg">
                                <div class="feature__body boxed boxed--border">
                                    <h4>Michael</h4>
                                    <p class="type--italic">
                                        "Save time with a multitude of styled components designed to showcase your content"
                                    </p>
                                </div>
                            </div>
                            <!--end feature-->
                        </div>
                        <div class="col-6 col-md-6 col-lg-3">
                            <div class="feature feature-1">
                                <img alt="Image" src="img/avatar-wide-4.jpg">
                                <div class="feature__body boxed boxed--border">
                                    <h4>Michael</h4>
                                    <p class="type--italic">
                                        "Save time with a multitude of styled components designed to showcase your content"
                                    </p>
                                </div>
                            </div>
                            <!--end feature-->
                        </div>
                        <div class="col-6 col-md-6 col-lg-3">
                            <div class="feature feature-1">
                                <img alt="Image" src="img/avatar-wide-4.jpg">
                                <div class="feature__body boxed boxed--border">
                                    <h4>Michael</h4>
                                    <p class="type--italic">
                                        "Save time with a multitude of styled components designed to showcase your content"
                                    </p>
                                </div>
                            </div>
                            <!--end feature-->
                        </div>
                        <div class="col-6 col-md-6 col-lg-3">
                            <div class="feature feature-1">
                                <img alt="Image" src="img/avatar-wide-4.jpg">
                                <div class="feature__body boxed boxed--border">
                                    <h4>Michael</h4>
                                    <p class="type--italic">
                                        "Save time with a multitude of styled components designed to showcase your content"
                                    </p>
                                </div>
                            </div>
                            <!--end feature-->
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </section>


            <footer class="footer-3 text-left-xs space--xs bg--dark">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <img alt="Image" class="logo" src="img/logo.png" style="width: 160px;max-height: initial;">
                            <!-- <ul class="list-inline list--hover">
                                <li class="list-inline-item">
                                    <a href="#">
                                        <span class="type--fine-print">Get Started</span>
                                    </a>
                                </li>
                            </ul> -->
                        </div>
                        <div class="col-md-6 text-right text-left-xs">
                            <ul class="social-list list-inline list--hover">
                                <li class="list-inline-item">
                                    <a href="https://twitter.com/rowersdpl">
                                        <i class="socicon socicon-twitter icon icon--xs"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="https://www.facebook.com/rowersdpl/">
                                        <i class="socicon socicon-facebook icon icon--xs"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="https://www.instagram.com/rowersdpl/">
                                        <i class="socicon socicon-instagram icon icon--xs"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="https://www.youtube.com/channel/UCxTj4hrKPlRhL4UZNg1xCYA">
                                        <i class="socicon socicon-youtube icon icon--xs"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="https://wa.me/919891890102">
                                        <i class="socicon socicon-whatsapp icon icon--xs"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--end of row-->
                    <div class="row">
                        <div class="col-md-6">
                            <p class="type--fine-print type--fade" style="font-size: 15px;">
                                prosperity begins here
                            </p>
                        </div>
                        <div class="col-md-6 text-right text-left-xs">
                            <span class="type--fine-print">©
                                <span class="update-year">2018</span> Rowers Inc.</span>
                            <a class="type--fine-print" href="#">Privacy Policy</a>
                            <a class="type--fine-print" href="#">Legal</a>
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </footer>
        </div>
        <!--<div class="loader"></div>-->
        <a class="back-to-top inner-link" href="#start" data-scroll-class="100vh:active">
            <i class="stack-interface stack-up-open-big"></i>
        </a>
        <script src="js/jquery-3.1.1.min.js"></script>
        <script src="js/flickity.min.js"></script><!--
        <script src="js/easypiechart.min.js"></script>
        <script src="js/parallax.js"></script>
        <script src="js/typed.min.js"></script>
        <script src="js/datepicker.js"></script>
        <script src="js/isotope.min.js"></script>
        <script src="js/ytplayer.min.js"></script>
        <script src="js/lightbox.min.js"></script>
        <script src="js/granim.min.js"></script>
        <script src="js/jquery.steps.min.js"></script>
        <script src="js/countdown.min.js"></script>
        <script src="js/twitterfetcher.min.js"></script>
        <script src="js/spectragram.min.js"></script> -->
        <script src="js/smooth-scroll.min.js"></script>
        <script src="js/scripts.js"></script>
        <script src="js/waqi.api.js"></script>
        <script type="text/javascript" src="js/popup.js"></script>
    </body>
</html>
