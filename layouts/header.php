<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="content-language" content="en" />
	<title></title>

	<link rel="stylesheet" href="assets/css/bootstrap.css">
	<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">
	<link rel="stylesheet" href="assets/css/main.css">

	<link href='http://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Oswald:700' rel='stylesheet' type='text/css'>
	
	<script src="assets/js/modernizr-2.6.2.min.js"></script>

	
	<script src="assets/js/jquery.js"></script>
	<script src="assets/js/admin.js"></script>
	<script src="assets/js/bootstrap.min.js"></script>

	<script type="text/javascript">
    //<![CDATA[
        $(window).load(function() { // makes sure the whole site is loaded
            $('.preloader__brand').fadeOut().addClass('preloader__brand--fade'); // will first fade out the loading animation
            $('.preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(350);
        })
    //]]>

    // adding active if menu visited and clicked
    $(function() {
	   $('nav.navbar .nav li a').filter(function() {
	      return this.href === document.URL;
	   }).closest('li').addClass('active');
	})

</script> 

</head>

	<body>
		<div id="container">

			<!--[if lt IE 7]>
				<p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
			<![endif]-->

			<div class="preloader">
				<div class="preloader__brand">&nbsp;</div>
			</div>
			<!-- remove this if you want to check mobile version too -->
			<div class="modal-backdrop--mobile alert fade in">
				<div class="modal-overlay--mobile">
					<p>Sorry for the incovenience, but you are using a device that is not supported. </p>
					<p>Some features might not be seen, Please use tablet or desktop instead.</p>
				</div>
			</div>

			<header class="t-header">

				<div class="navbar navbar-default navbar-fixed-top">
					<div class="navbar-header">
						<a class="navbar-brand" href="index.php"><img src="assets/admin/i/logo.jpg" alt=""></a>
					</div>
					<div class="navbar-collapse collapse">
						<ul class="nav navbar-nav navbar-right">
							<li class="dropdown active">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown">
									<span class="navbar-avatar-img"><img src="assets/global/placeholders/avatar1.jpg" alt=""></span> 
									<span id="admin-user">Jane Doe, admin</span> 
									
								</a>
									
								<ul class="dropdown-menu">
									<li><a href="#">Action</a></li>
									<li><a href="#">Another action</a></li>
								</ul>
							</li>
							<!-- <li>
								<button type="button" class="navbar-toggle">
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>
							</li> -->
						</ul>
					</div><!--/.nav-collapse -->
				</div>

			</header>