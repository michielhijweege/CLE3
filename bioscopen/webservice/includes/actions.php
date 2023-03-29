<?php
/**
 * @return array
 */
function getCinema()
{
    return [
        [
            "id" => 1,
            "name" => "LingeFilm"
        ],
        [
            "id" => 2,
            "name" => "DoK6 Cinema"
        ],
        [
            "id" => 3,
            "name" => "Dedicon"
        ],
        [
            "id" => 4,
            "name" => "Pathé"
        ],
        [
            "id" => 5,
            "name" => "Kinepolis"
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getCinemaDetails($id)
{
    $tags = [
        1 => [
            "id" => 1,
            "name" => "LingeFilm",
            "img" => "img/lingefilm.png",
            "imgalt" => "Logo LingeFilm",
            "linktekst" => "lingefilm.nl",
            "locatie" => ['Rijksstraatweg 64-103, 4191 SG Geldermalsen, Gelderland'],

            "beschrijving" => "LingeFilm is het gezelligste filmtheater van Geldermalsen en omstreken.
             We vertonen van september tot en met juli 3 tot 6 keer per week een film in het multifunctioneel centrum de Pluk in Geldermalsen.
             Ons programma bestaat uit actuele films van diverse genre, 
             zoals filmhuis-, kinder-, familie en muziekfilms, drama, komedie, thrillers, Nederlandse films, films uit Engelstalige en niet-Engelstalige landen en af en toe een mooie documentaire.
             In onze filmzaal kunnen bijna 100 bezoekers genieten van films in prachtig beeld en met voortreffelijk geluid.",

            "openingstijden" => [''],
            "meerInformatieLink" => "https://lingefilm.nl/2019/03/03/blind-of-slechtziend-ook-jij-kan-naar-de-bioscoop/",
            "toegankelijkheid" => "",
            "tags" => ['Audiodiscriptie', 'Earcatch', 'Film', 'Filmtheater']

        ],
        2 => [
            "id" => 2,
            "name" => "DoK6 Cinema",
            "img" => "img/dok6cinema.png",
            "imgalt" => "Logo LingeFilm",
            "locatie" => [''],
            "beschrijving" => "Lorem ipsun",
            "openingstijden" => [''],
            "meerInformatieLink" => "https://lingefilm.nl/2019/03/03/blind-of-slechtziend-ook-jij-kan-naar-de-bioscoop/",
            "toegankelijkheid" => "",
            "tags" => ['Audiodiscriptie', 'Earcatch']
        ],
        3 => [
            "id" => 3,
            "name" => "Dedicon",
            "img" => "img/lingefilm.png",
            "imgalt" => "Logo LingeFilm",
            "recipe" => "Very nice when your grandma prepares this meal",
            "tags" => ['omnomnom']
        ],
        4 => [
            "id" => 4,
            "name" => "Pathé",
            "img" => "img/lingefilm.png",
            "imgalt" => "Logo LingeFilm",
            "recipe" => "Everytime in the city after midnight",
            "tags" => ['kapsalon', 'tasty', 'meat']
        ],
        5 => [
            "id" => 5,
            "name" => "Kinepolis",
            "img" => "img/lingefilm.png",
            "imgalt" => "Logo LingeFilm",
            "recipe" => "Specialty when on holiday in Spain",
            "tags" => ['fish']
        ],
    ];

    return $tags[$id];
}
