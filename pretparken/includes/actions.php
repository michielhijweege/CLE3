<?php
/**
 * @return array
 */
function getPretpark()
{
    return [
        [
            "id" => 1,
            "name" => "Efteling",
        ],
        [
            "id" => 2,
            "name" => "Walibi",
        ],
        [
            "id" => 3,
            "name" => "Toverland",
        ],
        [
            "id" => 4,
            "name" => "Attractiepark-slagharen",
        ],
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getPretparkDetails($id)
{
    $tags = [
        1 => [
            "id" => 1,
            "name" => "Efteling",
            "img" => "img/efteling-logo.jpeg",
            "imgalt" => "logo efteling",
            "linktext" => "efteling.com",
            "link" => "https://www.efteling.com/nl",
            "topatracties" => [
                "1. Sprookjesbos",
                "2. Stoomtrein",
                "3. Fata Morgana",
                "4. Droomvlucht",
                "5. Aquanura",
                "6. Carnaval Festival",
                "7. Gondoletta",
                "8. Symbolica",
                "9. Efteling Museum",
                "10. Stoomtrein"
            ],
            "openingstijden" => [
                "<b>Maandag</b> van 10:00 tot 18:00",
                "<b>Dinsdag</b> van 10:00 tot 18:00",
                "<b>Woensdag</b> van 10:00 tot 18:00",
                "<b>Donderdag</b> van 10:00 tot 18:00",
                "<b>Vrijdag</b> van 10:00 tot 18:00",
                "<b>Zaterdag</b> van 10:00 tot 18:00",
                "<b>Zondag</b> van 10:00 tot 18:00"
            ],
            "honden" => "Toegankelijkheid met een hulp- of geleidehond\nHulp- en geleidehonden zijn welkom in de Efteling. Een hulp- of geleidehond moet herkenbaar zijn door een hesje en op de dag van het bezoek worden aangemeld bij de Gastenservice (links bij de hoofdentree van de Efteling). Hulp- of geleidehonden mogen mee in alle winkels en restaurants. Ook kunnen ze mee in onderstaande attracties.\nAls de hond niet meegaat in een attractie, maar erbuiten blijft wachten, moet er een begeleider bij de hond blijven.",
            "rolstoel" => "Toegankelijkheid met een rolstoel\nBijna alle attracties hebben een speciale rolstoelingang. Wanneer je de attractie via de rolstoelingang bezoekt, kom je geen fysieke obstakels (zoals trappen) tegen en kun je buiten de gewone wachtrij wachten. De rolstoelingang geeft geen voorrang of kortere wachttijden. Bij drukte kan er ook bij de rolstoelingang een wachttijd ontstaan."
        ],
        2 => [
            "id" => 2,
            "name" => "Walibi",
            "img" => "img/walibi-logo.jpeg",
            "imgalt" => "logo walibi",
            "linktext" => "efteling.com",
            "link" => "https://www.efteling.com/nl",
            "topatracties" => [
                "1. Sprookjesbos",
                "2. Stoomtrein",
                "3. Fata Morgana",
                "4. Droomvlucht",
                "5. Aquanura",
                "6. Carnaval Festival",
                "7. Gondoletta",
                "8. Symbolica",
                "9. Efteling Museum",
                "10. Stoomtrein"
            ],
            "openingstijden" => [
                "<b>Maandag</b> van 10:00 tot 18:00",
                "<b>Dinsdag</b> van 10:00 tot 18:00",
                "<b>Woensdag</b> van 10:00 tot 18:00",
                "<b>Donderdag</b> van 10:00 tot 18:00",
                "<b>Vrijdag</b> van 10:00 tot 18:00",
                "<b>Zaterdag</b> van 10:00 tot 18:00",
                "<b>Zondag</b> van 10:00 tot 18:00"
            ],
            "honden" => "Toegankelijkheid met een hulp- of geleidehond\nHulp- en geleidehonden zijn welkom in de Efteling. Een hulp- of geleidehond moet herkenbaar zijn door een hesje en op de dag van het bezoek worden aangemeld bij de Gastenservice (links bij de hoofdentree van de Efteling). Hulp- of geleidehonden mogen mee in alle winkels en restaurants. Ook kunnen ze mee in onderstaande attracties.\nAls de hond niet meegaat in een attractie, maar erbuiten blijft wachten, moet er een begeleider bij de hond blijven.",
            "rolstoel" => "Toegankelijkheid met een rolstoel\nBijna alle attracties hebben een speciale rolstoelingang. Wanneer je de attractie via de rolstoelingang bezoekt, kom je geen fysieke obstakels (zoals trappen) tegen en kun je buiten de gewone wachtrij wachten. De rolstoelingang geeft geen voorrang of kortere wachttijden. Bij drukte kan er ook bij de rolstoelingang een wachttijd ontstaan."
        ],
        3 => [
            "id" => 3,
            "name" => "Toverland",
            "img" => "img/toverland-logo.jpeg",
            "imgalt" => "logo toverland",
            "linktext" => "toverland.com",
            "link" => "https://www.toverland.com/",
            "topatracties" => [
                "1. x",
                "2. x",
                "3. x",
                "4. x",
                "5. x",
                "6. x",
                "7. x",
                "8. x",
                "9. x",
                "10. x"
            ],
            "openingstijden" => [
                "<b>Maandag</b> van 10:00 tot 18:00",
                "<b>Dinsdag</b> van 10:00 tot 18:00",
                "<b>Woensdag</b> van 10:00 tot 18:00",
                "<b>Donderdag</b> van 10:00 tot 18:00",
                "<b>Vrijdag</b> van 10:00 tot 18:00",
                "<b>Zaterdag</b> van 10:00 tot 19:00",
                "<b>Zondag</b> van 10:00 tot 19:00"
            ],
            "honden" => "X",
            "rolstoel" => "X"
        ],
        4 => [
            "id" => 4,
            "name" => "Attractiepark-slagharen",
            "img" => "img/slagharen-logo.jpeg",
            "imgalt" => "logo slagharen",
            "linktext" => "slagharen.com",
            "link" => "https://slagharen.com",
            "topatracties" => [
                "1. x",
                "2. x",
                "3. x",
                "4. x",
                "5. x",
                "6. x",
                "7. x",
                "8. x",
                "9. x",
                "10. x"
            ],
            "openingstijden" => [
                "<b>Maandag</b> van 10:00 tot 17:00",
                "<b>Dinsdag</b> van 10:00 tot 17:00",
                "<b>Woensdag</b> van 10:00 tot 17:00",
                "<b>Donderdag</b> van 10:00 tot 17:00",
                "<b>Vrijdag</b> van 10:00 tot 17:00",
                "<b>Zaterdag</b> van 10:00 tot 18:00",
                "<b>Zondag</b> van 10:00 tot 18:00"
            ],
            "honden" => "X",
            "rolstoel" => "X"
        ],
    ];

    return $tags[$id];
}