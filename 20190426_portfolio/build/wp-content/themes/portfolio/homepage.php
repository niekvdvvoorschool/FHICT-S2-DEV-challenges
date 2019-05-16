<?php
/*
 Template Name: Home page
*/
?>

<?php get_header(); ?>

<header>
    <img class="logo" src="https://niekvandevondervoort.com/wp-content/uploads/2018/04/logo-white.svg">

    <h1 class="glitch">PORTFOLIO</h1>
    <p class="niekvdv glitch2">Niek van de Vondervoort</p>

    <div class="scrolldown">
        <img src="https://niekvandevondervoort.com/wp-content/uploads/2018/04/scroll-down.gif">
    </div>
</header>

<div class="container-fluid">
    <div class="row">
        <div class="col-md-8 col-md-offset-2 vakken">
            <h2>Vakken</h2>
            <p>Klik op een vak om de gemaakte opdrachten te bekijken.</p>
            <div class="row">
                <div class="col-md-3 vak sco">
                    <a href="/SCO/">
                        <h2>SCO</h2>
                    </a>
                </div>
                <div class="col-md-3 vak dev">
                    <a href="/DEV/">
                        <h2>DEV</h2>
                    </a>
                </div>
                <div class="col-md-3 vak uex">
                    <a href="/UEX/">
                        <h2>UEX</h2>
                    </a>
                </div>
                <div class="col-md-3 vak pt">
                    <a href="/PT/">
                        <h2>PT</h2>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-8 col-md-offset-2 leerdoelen">
            <h2>Leerdoelen</h2>
            <p>Klik op een leerdoel om te zien hoe ik deze aantoon.</p>
            <a href="/leerdoelen/1-a-strategy-concept/">
                <div class="leerdoel sco">
                    <h1>1.A. STRATEGY & CONCEPT</h1>
                    <p>"You develop a consistent and distinctive brand strategy and visual identity based on target audience analysis."</p>
                </div>
            </a>
            <a href="#">
                <div class="leerdoel sco">
                    <h1>1.B. STRATEGY & CONCEPT</h1>
                    <p>"You create media products for your client by using experiments, iterations and examples from the professional field."</p>
                </div>
            </a>
            <a href="/leerdoelen/2-development/">
                <div class="leerdoel dev">
                    <h1>2. DEVELOPMENT </h1>
                    <p>"You develop media products by programming and integrating proofs of concepts based on validated requirements."</p>
                </div>
            </a>
            <a href="#">
                <div class="leerdoel uex">
                    <h1>3. USER EXPERIENCE & USER CENTERED DESIGN</h1>
                    <p>"You design prototypes and user research, based on preselected methodologies and on user consults."</p>
                </div>
            </a>
            <a href="#">
                <div class="leerdoel pt">
                    <h1>4. PROJECT</h1>
                    <p>"You deliver complete media products for your client that meet the client’s needs."</p>
                </div>
            </a>
            <a href="#">
                <div class="leerdoel">
                    <h1>5.A. PROFESSIONAL DEVELOPMENT</h1>
                    <p>"You form well-balanced insights based on an investigative approach."</p>
                </div>
            </a>
            <a href="#">
                <div class="leerdoel">
                    <h1>5.B. PROFESSIONAL DEVELOPMENT</h1>
                    <p>"You effectively communicate with your stakeholders."</p>
                </div>
            </a>
        </div>
    </div>
</div>

<?php get_footer(); ?>