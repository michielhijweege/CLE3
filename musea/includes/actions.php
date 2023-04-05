<?php

/**
 * @return array
 */
function getMusea()
{
    return [
        [
            "id" => 0,
            "name" => "Kunsthal Rotterdam",
        ],
        [
            "id" => 1,
            "name" => "Rijksmuseum",
        ],
        [
            "id" => 2,
            "name" => "Maritiem Museum",
        ],
        [
            "id" => 3,
            "name" => "Kunstmuseum Den Haag",
        ],
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getMuseaDetails($id)
{
    $tags = [
        0 => [
            "id" => 0,
            "name" => "Kunsthal Rotterdam",
            "img"=> "img/kunsthal-rotterdam.png",
            "imgalt" => "Logo Kunsthal Rotterdam",
            "linktext" => "Kunsthal.nl",
            "link" => "https://www.kunsthal.nl/nl/",
            "rating" => "2.5",
            "ratingicon" => "img/2.5-sterren.png",
            "ratingiconalt" => "2.5 Sterren Icoon",
            "openingstijden" => [
                "Gesloten",
                "10:00 tot 17:00",
                "10:00 tot 17:00",
                "10:00 tot 17:00",
                "10:00 tot 17:00",
                "10:00 tot 17:00",
                "10:00 tot 17:00",
            ],
            "openingsdagen" => [
                "Maandag",
                "Dinsdag",
                "Woensdag",
                "Donderdag",
                "Vrijdag",
                "Zaterdag",
                "Zondag",
            ],
            "reviewtitle" => [],
            "reviewrating" => [],
            "reviewtext" => [],
            "titleinput" => [],
            "ratinginput" => [],
            "reviewinput" => [],
        ],
        1 => [
            "id" => 1,
            "name" => "Rijksmuseum",
            "img"=> "img/rijksmuseum.png",
            "imgalt" => "Logo Rijksmuseum",
            "linktext" => "Rijksmuseum.nl",
            "link" => "https://www.rijksmuseum.nl/nl/",
            "rating" => "5",
            "ratingicon" => "img/5-sterren.png",
            "ratingiconalt" => "5 Sterren Icoon",
            "openingstijden" => [
                "09:00 tot 17:00",
                "09:00 tot 17:00",
                "09:00 tot 17:00",
                "09:00 tot 17:00",
                "09:00 tot 17:00",
                "09:00 tot 17:00",
                "09:00 tot 17:00",
            ],
            "openingsdagen" => [
                "Maandag",
                "Dinsdag",
                "Woensdag",
                "Donderdag",
                "Vrijdag",
                "Zaterdag",
                "Zondag",
            ],
            "reviewtitle" => [],
            "reviewrating" => [],
            "reviewtext" => [],
            "titleinput" => [],
            "ratinginput" => [],
            "reviewinput" => [],
            ],
        2 => [
            "id" => 2,
            "name" => "Maritiem Museum",
            "img"=> "img/maritiem-museum.png",
            "imgalt" => "Logo Maritiem Museum",
            "linktext" => "Maritiem-Museum.nl",
            "link" => "https://www.maritiemmuseum.nl/nl/",
            "rating" => "3",
            "ratingicon" => "img/3-sterren.png",
            "ratingiconalt" => "3 Sterren Icoon",
            "openingstijden" => [
                "Gesloten",
                "10:00 tot 17:00",
                "10:00 tot 17:00",
                "10:00 tot 17:00",
                "10:00 tot 17:00",
                "10:00 tot 17:00",
                "11:00 tot 17:00",
            ],
            "openingsdagen" => [
                "Maandag",
                "Dinsdag",
                "Woensdag",
                "Donderdag",
                "Vrijdag",
                "Zaterdag",
                "Zondag",
            ],
            "reviewtitle" => [],
            "reviewrating" => [],
            "reviewtext" => [],
            "titleinput" => [],
            "ratinginput" => [],
            "reviewinput" => [],
            ],
        3 => [
            "id" => 3,
            "name" => "Kunstmuseum Den Haag",
            "img"=> "img/kunstmuseum-den-haag.png",
            "imgalt" => "Logo Kunstmuseum Den Haag",
            "linktext" => "Kunstmuseum.nl",
            "link" => "https://www.kunstmuseum.nl/",
            "rating" => "1",
            "ratingicon" => "img/1-sterren.png",
            "ratingiconalt" => "1 Sterren Icoon",
            "openingstijden" => [
                "Gesloten",
                "10:00 tot 17:00",
                "10:00 tot 17:00",
                "10:00 tot 17:00",
                "10:00 tot 17:00",
                "10:00 tot 17:00",
                "10:00 tot 17:00",
            ],
            "openingsdagen" => [
                "Maandag",
                "Dinsdag",
                "Woensdag",
                "Donderdag",
                "Vrijdag",
                "Zaterdag",
                "Zondag",
            ],
            "reviewtitle" => [],
            "reviewrating" => [],
            "reviewtext" => [],
            "titleinput" => [],
            "ratinginput" => [],
            "reviewinput" => [],        ],
    ];

    return $tags[$id];
}



