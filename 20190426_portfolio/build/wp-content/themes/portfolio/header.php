<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' |'; } ?> <?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.ico" rel="shortcut icon">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">

		<?php wp_head(); ?>
		<script>
        // conditionizr.com
        // configure environment tests
        conditionizr.config({
            assets: '<?php echo get_template_directory_uri(); ?>',
            tests: {}
        });
        </script>
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/portfolio/css/styles.css">
        <link href="https://fonts.googleapis.com/css?family=Anton|Open+Sans|Montserrat:900,600" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    </head>
	<body <?php body_class(); ?>>
		
		
    <!--                                                  -->
	<!--    _____  _    _  _____ _  __ _____     _____    -->
	<!--   |  __ \| |  | |/ ____| |/ // ____|  _|  __ \   -->
	<!--   | |  | | |  | | |    | ' /| (___   (_) |  | |  -->
	<!--   | |  | | |  | | |    |  <  \___ \    | |  | |  -->
	<!--   | |__| | |__| | |____| . \ ____) |  _| |__| |  -->
	<!--   |_____/ \____/ \_____|_|\_\_____/  (_)_____/   -->
    <!--                                                  -->
	<!--                 ./ossssso:                       -->
	<!--              -hs-      `/h/                      -->
	<!--             :d. -o-       h/                     -->
	<!--        ::/osds  oN+       /d                     -->
	<!--       /m:.`  +d           oy                     -->
	<!--        :ssssosm          /d`         `:+-        -->
	<!--              `ys        :N.     `-/sss/-N`       -->
	<!--             `+h:         :osooo+//-     d/       -->
	<!--            +h:                          y+       -->
	<!--           oh                            d/       -->
	<!--           m-                           .N`       -->
	<!--           h+                          `d/        -->
	<!--           .d/                        .d/         -->
	<!--            `sh:                    -yy.          -->
   	<!--              `+ys+-`          .:+sy+`            -->
	<!--                  -/oossssssoso+:.                -->
    <!--                                                  -->
		
    <div id="fsm-overlay" class="fsm-overlay">
        <div class="fsm-left">
            <div class="fsm-image" style="background-image: url('https://niekvandevondervoort.com/wp-content/uploads/2018/05/heroimage-contact.jpg')">

            </div>
        </div>
        <div class="fsm-right">
            <div class="fsm-wrapper">
                <div class="fsm-content">
                    <nav>
                        <a href="/">HOME</a>
                        <a href="/SCO/">SCO</a>
                        <a href="/UEX/">UEX</a>
                        <a href="/DEV/">DEV</a>
                        <a href="/PT/">PT</a>
                        <!--<a href="/PTM/">PTM</a>-->
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <div id="fsm-toggle" class="fsm-toggle" onclick="FSMopen()">
        <div class="fsm-hamburger">
            <div class="fsm-one"></div>
            <div class="fsm-two"></div>
            <div class="fsm-three"></div>
        </div>
    </div>
