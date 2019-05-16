<?php
/*
 Template Name: Project page
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

    <h1><?php the_field('titel'); ?></h1>

    <?php the_field('content'); ?>

    <a class="btn" href="../">
        Terug
    </a>
</main>



<?php get_footer(); ?>
