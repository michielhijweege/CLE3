<?php
/**
 * @return array
 */
function getMusea()
{
    return [
        [
            "id" => 1,
            "name" => "Kunsthal Rotterdam",
        ],
        [
            "id" => 2,
            "name" => "Rijksmuseum",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getMuseaDetails($id)
{
    $tags = [
        1 => [
            "img" => "img/kunsthal-rotterdam.jpeg",
            "imgalt" => "logo kunsthal rotterdam",
            "linktext" => "kunsthal.com",
            "link" => "https://www.kunsthal.com/nl",
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
                "nummer1" => "<b>Maandag</b> Gesloten",
                "nummer2" => "<b>Dinsdag</b> Van 10:00 tot 17:00",
                "nummer3" => "<b>Woensdag</b> Van 10:00 tot 17:00",
                "nummer4" => "<b>Donderdag</b> Van 10:00 tot 17:00",
                "nummer5" => "<b>Vrijdag</b> Van 10:00 tot 17:00",
                "nummer6" => "<b>Zaterdag</b> Van 10:00 tot 17:00",
                "nummer7" => "<b>Zondag</b> Van 10:00 tot 17:00"
            ],
        ],
        2 => [
        ],
    ];

    return $tags[$id];
}
