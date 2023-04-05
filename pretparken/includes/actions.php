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
                "10:00 tot 18:00",
                "10:00 tot 18:00",
                "10:00 tot 18:00",
                "10:00 tot 18:00",
                "10:00 tot 18:00",
                "10:00 tot 18:00",
                "10:00 tot 18:00"
            ],
            "openingsdagen" => [
                "Maandag",
                "Dinsdag",
                "Woensdag",
                "Donderdag",
                "Vrijdag",
                "Zondag",
                "Zaterdag"
            ],
            "bannerimg" => "img/efteling-banner.jpeg",
            "bannerimgalt" => "banner efteling",
            "honden" => "Toegankelijkheid met een hulp- of geleidehond\nHulp- en geleidehonden zijn welkom in de Efteling. Een hulp- of geleidehond moet herkenbaar zijn door een hesje en op de dag van het bezoek worden aangemeld bij de Gastenservice (links bij de hoofdentree van de Efteling). Hulp- of geleidehonden mogen mee in alle winkels en restaurants. Ook kunnen ze mee in onderstaande attracties.\nAls de hond niet meegaat in een attractie, maar erbuiten blijft wachten, moet er een begeleider bij de hond blijven.",
            "rolstoel" => "Toegankelijkheid met een rolstoel\nBijna alle attracties hebben een speciale rolstoelingang. Wanneer je de attractie via de rolstoelingang bezoekt, kom je geen fysieke obstakels (zoals trappen) tegen en kun je buiten de gewone wachtrij wachten. De rolstoelingang geeft geen voorrang of kortere wachttijden. Bij drukte kan er ook bij de rolstoelingang een wachttijd ontstaan."
        ],
        2 => [
            "id" => 2,
            "name" => "Walibi",
            "img" => "img/walibi-logo.jpeg",
            "imgalt" => "logo walibi",
            "linktext" => "walibi.com",
            "link" => "https://www.walibi.com/nl",
            "topatracties" => [
                "1. De Goliath",
                "2. De Lost Gravity",
                "3. De Xpress Platform 13",
                "4. De Speed of Sound",
                "5. De Crazy River",
                "6. De Robin Hood",
                "7. De Condor",
                "8. De Skydiver",
                "9. De Space Shot",
                "10. De Drako"
            ],
            "openingstijden" => [
                "10:00 tot 18:00",
                "10:00 tot 18:00",
                "10:00 tot 18:00",
                "10:00 tot 18:00",
                "10:00 tot 18:00",
                "10:00 tot 18:00",
                "10:00 tot 18:00"
            ],
            "openingsdagen" => [
                "Maandag",
                "Dinsdag",
                "Woensdag",
                "Donderdag",
                "Vrijdag",
                "Zondag",
                "Zaterdag"
            ],
            "bannerimg" => "img/walibi-banner.jpeg",
            "bannerimgalt" => "banner walibi",
            "honden" => "Honden worden niet toegelaten op het park. Walibi beschikt niet over kennels waarin je je hond kunt achterlaten. Blindengeleidehonden en honden van mensen met een lichamelijke of geestelijke beperking zijn de enige honden die Walibi wel mogen betreden. Hulphonden moeten duidelijk herkenbaar zijn.",
            "rolstoel" => "Via de Guest Service kun je een rolstoel lenen, de Guest Service zit na de ingang aan de linkerkant in de Main Street. Rolstoelen kunnen niet worden gereserveerd en zijn beperkt beschikbaar. Tijdens Halloween Fright Nights dagen zijn er geen rolstoelen beschikbaar."
        ],
        3 => [
            "id" => 3,
            "name" => "Toverland",
            "img" => "img/toverland-logo.jpeg",
            "imgalt" => "logo toverland",
            "linktext" => "toverland.com",
            "link" => "https://www.toverland.com/",
            "topatracties" => [
                "1. Exploria Magica",
                "2. Wirbelbaum",
                "3. Fenix",
                "4. Maximus Wunderball",
                "5. Expedition Zork",
                "6. Scorpios",
                "7. Maximus Blitz Bahn",
                "8. Theekopjes",
                "9. Merlin's Quest",
                "10. Troy"
            ],
            "openingstijden" => [
                "10:00 tot 18:00",
                "10:00 tot 18:00",
                "10:00 tot 18:00",
                "10:00 tot 18:00",
                "10:00 tot 18:00",
                "10:00 tot 19:00",
                "10:00 tot 19:00"
            ],
            "openingsdagen" => [
                "Maandag",
                "Dinsdag",
                "Woensdag",
                "Donderdag",
                "Vrijdag",
                "Zondag",
                "Zaterdag"
            ],
            "bannerimg" => "img/toverland-banner.jpeg",
            "bannerimgalt" => "banner toverland",
            "honden" => "Het bezoeken van Toverland met blindengeleide- of hulphonden is wel mogelijk.",
            "rolstoel" => "Er zijn speciale rolstoel wegen en je kan de wc's gewoongebruiken"
        ],
        4 => [
            "id" => 4,
            "name" => "Attractiepark-slagharen",
            "img" => "img/slagharen-logo.jpeg",
            "imgalt" => "logo slagharen",
            "linktext" => "slagharen.com",
            "link" => "https://slagharen.com",
            "topatracties" => [
                "1. Ripsaw Falls",
                "2. Mine Train",
                "3. The Eagle",
                "4. The Pirate",
                "5. Tomahawk",
                "6. El Torito",
                "7. Red Bandits Adventure",
                "8. Big Wheel",
                "9. Cable Car",
                "10. El Teatro"
            ],
            "openingstijden" => [
                "10:00 tot 17:00",
                "10:00 tot 17:00",
                "10:00 tot 17:00",
                "10:00 tot 17:00",
                "10:00 tot 17:00",
                "10:00 tot 18:00",
                "10:00 tot 18:00"
            ],
            "openingsdagen" => [
                "Maandag",
                "Dinsdag",
                "Woensdag",
                "Donderdag",
                "Vrijdag",
                "Zondag",
                "Zaterdag"
            ],
            "bannerimg" => "img/slagharen-banner.jpeg",
            "bannerimgalt" => "banner slagharen",
            "honden" => "Honden zijn van harte welkom in Attractie- & Vakantiepark Slagharen, maar niet in de attracties, shows, restaurants en winkels. Honden moeten altijd aangelijnd zijn en voor een dagbezoek is geen toeslag nodig. Hulphonden zijn ook van harte welkom mits zij herkenbaar zijn door een hesje. Hulp- of geleidehonden mogen mee in de restaurants en winkels. ",
            "rolstoel" => "Bijna alle attracties zijn op een bepaalde manier (deels) toegankelijk voor mindervaliden. Helaas zijn er enkele attracties wat moeilijker te bereiken, maar in overleg met onze attractiemedewerkers is er veel mogelijk. De meeste attracties zijn voor rolstoelgebruikers toegankelijk via de uitgang. De attractiemedewerker kan je eventueel begeleiden en assisteren. De parkshows zijn goed bereikbaar voor mindervaliden. Vraag bij de Guest Service naar de folder met een overzicht van alle attracties en hun toegankelijkheid."
        ],
    ];

    return $tags[$id];
}