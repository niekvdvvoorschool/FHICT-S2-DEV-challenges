<?php
/*
 Template Name: Leerdoel page
*/
?>

<?php get_header(); ?>

<a href="../">
    <div class="back">
        ← Terug
    </div>
</a>

<main role="main">
    
    <header style="background-image: url('<?php the_field('header_foto'); ?>');">
        <img src="/wp-content/themes/portfolio/img/projectpage-headershape.svg">
    </header>

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="leerdoel">
                    <h1><?php the_field('titel'); ?></h1>
                    <p>"<?php the_field('leerdoel'); ?>"</p>
                </div>
            </div>
        </div>
    </div>

    <?php the_field('content'); ?>

    <a class="btn" href="../">
        Terug
    </a>
</main>



<?php get_footer(); ?>
