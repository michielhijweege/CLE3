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
        ]
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
            "img" => "img/efteling-logo.jpeg",
            "imgalt" => "logo efteling",
            "linktext" => "efteling.com",
            "link" => "https://www.efteling.com/nl",
            "topatracties" => [
                "nummer1" => "1. Sprookjesbos",
                "nummer2" => "2. Stoomtrein",
                "nummer3" => "3. Fata Morgana",
                "nummer4" => "4. Droomvlucht",
                "nummer5" => "5. Aquanura",
                "nummer6" => "6. Carnaval Festival",
                "nummer7" => "7. Gondoletta",
                "nummer8" => "8. Symbolica",
                "nummer9" => "9. Efteling Museum",
                "nummer10" => "10. Stoomtrein"
            ],
            "openingstijden" => [
                "nummer1" => "<b>Maandag</b> van 10:00 tot 18:00",
                "nummer2" => "<b>Dinsdag</b> van 10:00 tot 18:00",
                "nummer3" => "<b>Woensdag</b> van 10:00 tot 18:00",
                "nummer4" => "<b>Donderdag</b> van 10:00 tot 18:00",
                "nummer5" => "<b>Vrijdag</b> van 10:00 tot 18:00",
                "nummer6" => "<b>Zaterdag</b> van 10:00 tot 18:00",
                "nummer7" => "<b>Zondag</b> van 10:00 tot 18:00"
            ],
            "honden" => "Toegankelijkheid met een hulp- of geleidehond\nHulp- en geleidehonden zijn welkom in de Efteling. Een hulp- of geleidehond moet herkenbaar zijn door een hesje en op de dag van het bezoek worden aangemeld bij de Gastenservice (links bij de hoofdentree van de Efteling). Hulp- of geleidehonden mogen mee in alle winkels en restaurants. Ook kunnen ze mee in onderstaande attracties.\nAls de hond niet meegaat in een attractie, maar erbuiten blijft wachten, moet er een begeleider bij de hond blijven.",
            "rolstoel" => "Toegankelijkheid met een rolstoel\nBijna alle attracties hebben een speciale rolstoelingang. Wanneer je de attractie via de rolstoelingang bezoekt, kom je geen fysieke obstakels (zoals trappen) tegen en kun je buiten de gewone wachtrij wachten. De rolstoelingang geeft geen voorrang of kortere wachttijden. Bij drukte kan er ook bij de rolstoelingang een wachttijd ontstaan."
        ],
        2 => [
            "recipe" => "You can make this delicious Dutch meal by ...",
            "tags" => ['unox', 'healthy', 'stamppot', 'boerenkool']
        ]
    ];

    return $tags[$id];
}