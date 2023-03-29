<?php
/**
 * @return array
 */
function getDishes()
{
    return [
        [
            "id" => 1,
            "name" => "LingeFilm",
            "img" => "/",
            "imgalt" => "Logo LingeFilm",
        ],
        [
            "id" => 2,
            "name" => "DoK6 Cinema",
            "img" => "/",
            "imgalt" => "logo Dok6 cinema",
        ],
        [
            "id" => 3,
            "name" => "Dedicon",
            "img" => "/",
            "imgalt" => "Logo Dedicon",
        ],
        [
            "id" => 4,
            "name" => "Pathé",
            "img" => "/",
            "imgalt" => "Logo Pathé",
        ],
        [
            "id" => 5,
            "name" => "Kinepolis",
            "img" => "/",
            "imgalt" => "Logo Kinepolis",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getDishDetails($id)
{
    $tags = [
        1 => [
            "locatie" => [''],
            "beschrijving" => "Lorem ipsun",
            "openingstijden" => [''],
            "meerInformatieLink" => "https://lingefilm.nl/2019/03/03/blind-of-slechtziend-ook-jij-kan-naar-de-bioscoop/",
            "tags" => ['Audiodiscriptie', 'Earcatch']



        ],
        2 => [
            "recipe" => "You can make this delicious Dutch meal by ...",
            "tags" => ['unox', 'healthy', 'stamppot', 'boerenkool']
        ],
        3 => [
            "recipe" => "Very nice when your grandma prepares this meal",
            "tags" => ['omnomnom']
        ],
        4 => [
            "recipe" => "Everytime in the city after midnight",
            "tags" => ['kapsalon', 'tasty', 'meat']
        ],
        5 => [
            "recipe" => "Specialty when on holiday in Spain",
            "tags" => ['fish']
        ],
    ];

    return $tags[$id];
}
