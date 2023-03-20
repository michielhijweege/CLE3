<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta alt="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="">
    <title>Dag je uit met mensen met een visuele beperking</title>
    <link href="css/style.css" type="text/css" rel="stylesheet">
    <script type="text/javascript" src="js/pretparken.js" defer></script>
</head>
<body>

    <?php
    $pretparklist = file_get_contents("json/pretparken.json");
    $pretparkJson = json_decode($pretparklist);
    ?>
    <div id="menu">
        <p id="active">Pretparken</p>
        <div id="logo"><a class="button" href="index.php">Caecus</a></div>
        <div id="buttons">
            <a class="button" href="bioscopen.php">Bioscopen</a>
            <a class="button" href="musea.php">Musea</a>
            <a class="button" href="contact.php">Contact</a>
        </div>
    </div>

    <a class="button" href="musea.php">All</a>
    <a class="button" href="contact.php">Saved</a>

    <section id="content">
        <?php
            $pretparkcount = $pretparkJson->pretparken;
            for ($i = 0; $i < count($pretparkcount); $i++){
        ?>
        <section class="content-box">
            <img class="logo-pretpark" src="<?=$pretparkJson->pretparken[$i]->img ?>" alt="<?=$pretparkJson->pretparken[$i]->imgalt ?>">
            <section>
                <h2><?=$pretparkJson->pretparken[$i]->title ?></h2>
                <a href="<?=$pretparkJson->pretparken[$i]->link ?>"><?=$pretparkJson->pretparken[$i]->linktext ?></a>
                <h3>Top atracties</h3>
                <ul>
                    <li><?=$pretparkJson->pretparken[$i]->topatracties->nummer1 ?></li>
                    <li><?=$pretparkJson->pretparken[$i]->topatracties->nummer2 ?></li>
                    <li><?=$pretparkJson->pretparken[$i]->topatracties->nummer3 ?></li>
                    <li><?=$pretparkJson->pretparken[$i]->topatracties->nummer4 ?></li>
                    <li><?=$pretparkJson->pretparken[$i]->topatracties->nummer5 ?></li>
                </ul>
            </section>
            <section>
                <h3>Openings tijden</h3>
                <ul>
                    <li><?=$pretparkJson->pretparken[$i]->openingstijden->nummer1 ?></li>
                    <li><?=$pretparkJson->pretparken[$i]->openingstijden->nummer2 ?></li>
                    <li><?=$pretparkJson->pretparken[$i]->openingstijden->nummer3 ?></li>
                    <li><?=$pretparkJson->pretparken[$i]->openingstijden->nummer4 ?></li>
                    <li><?=$pretparkJson->pretparken[$i]->openingstijden->nummer5 ?></li>
                    <li><?=$pretparkJson->pretparken[$i]->openingstijden->nummer6 ?></li>
                    <li><?=$pretparkJson->pretparken[$i]->openingstijden->nummer7 ?></li>
                </ul>
                <button class="lees-meer">Lees meer</button>
                <button id="<?=$pretparkJson->pretparken[$i]->title ?>" class="save notsaved">save <?=$pretparkJson->pretparken[$i]->title ?></button>
            </section>
        </section>
        <?php } ?>
    </section>
</body>
</html>