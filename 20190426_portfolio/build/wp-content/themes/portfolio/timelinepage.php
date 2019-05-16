<?php
/*
 Template Name: Timeline page
*/
?>

<?php get_header(); ?>

<style>
    body {
        background-color: <?php the_field('achtergrond_kleur') ?>!important;
    }
</style>

<a href="../">
    <div class="back">
        ← Terug
    </div>
</a>

<main role="main">
    
    <div class="everythingabout">
        <p>everything about</p>
        <h1><?php the_title(); ?></h1>
    </div>

    <div class="timeline">
        <div class="container-fluid">
            <?php
            if( have_rows('opdrachten') ):
                $even = true;
                $first = true;
                while ( have_rows('opdrachten') ) : the_row();
                    $even = !$even;

                    ?>
                    <div class="row">
                        <div class="col-md-12">
                            <svg class="connector" height="100" width="200">
                                <?php if ($first) {?>
                                    <line x1="110" y1="-10" x2="3" y2="110" style="stroke:rgb(255,255,255);stroke-width:20" />
                                <?php } else if ($even) { ?>
                                    <line x1="3" y1="-10" x2="197" y2="110" style="stroke:rgb(255,255,255);stroke-width:20" />
                                <?php } else { ?>
                                    <line x1="197" y1="-10" x2="3" y2="110" style="stroke:rgb(255,255,255);stroke-width:20" />
                                <?php } ?>
                            </svg>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-9 item <?php if ($even) { echo "col-md-offset-3"; } ?>">
                            <h3><?php the_sub_field('titel'); ?></h3>
                            <p><?php the_sub_field('omschrijving'); ?></p>
                            <a href="<?php the_sub_field('url'); ?>">
                                <div class="btn">Lees verder <i class="fas fa-arrow-right"></i></div>
                            </a>
                        </div>
                    </div>
                    <?php
                    $first = false;
                endwhile;
            endif;
            ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>
