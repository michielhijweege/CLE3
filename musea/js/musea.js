window.addEventListener('load', init);

const apiUrl = 'http://localhost/CLE3/musea';
let section;
let list;
let saveitems = [];
let detailpage;
let museadetails = [];

function init()
{
    list = document.getElementById("content")
    list.addEventListener('click', ItemWasClicked)

    fetch(apiUrl)
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then(museaSuccesHandler)
        .catch(ajaxErrorHandler)

    createDetailPagina()
}

//create detail pagina
function createDetailPagina(){
    const detailpageholder = document.createElement('section')
    detailpageholder.classList.add('detailpageholder')
    detailpage = document.createElement('section')
    detailpage.classList.add('detailpage')
    detailpage.id = 'hide'

    let closebutton = document.createElement("button")
    closebutton.innerHTML = 'Lees minder'
    closebutton.classList.add("lees")

    document.body.appendChild(detailpageholder)
    detailpageholder.appendChild(detailpage)
    detailpage.appendChild(closebutton)
    detailpage.addEventListener('click', ItemWasClicked)
}

//create een section
function museaSuccesHandler(data){
    for (let musea of data) {
        console.log(musea)
        const newmuseadiv = document.createElement('section')
        newmuseadiv.classList.add("content-box")
        newmuseadiv.dataset.name = musea.name;
        list.appendChild(newmuseadiv)

        fetch(apiUrl + '?id=' + musea.id)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(detailSuccesHandler)
            .catch(ajaxErrorHandler);
    }
}

//laad en zet de detail data
function detailSuccesHandler(musea) {
    console.log(musea)
    let museaCard = document.querySelector(`.content-box[data-name='${musea.name}']`);
//logo inladen
    let logoimg = document.createElement("img")
    logoimg.src = musea.img
    logoimg.alt = musea.imgalt
    logoimg.classList.add("logo-musea")
    museaCard.appendChild(logoimg)

//create mid content
    let midcontent = document.createElement('section')
    midcontent.classList.add('midcontent')
    museaCard.appendChild(midcontent)

//title inladen
    let title = document.createElement('h2');
    title.innerHTML = musea.name;
    midcontent.appendChild(title);

//link inladen
    let link = document.createElement("a")
    link.innerHTML = musea.linktext
    link.href = musea.link
    link.setAttribute('target', '_blank');
    midcontent.appendChild(link);

//rating inladen
    let rating = document.createElement("h3")
    rating.innerHTML = musea.rating + " / 5"
    midcontent.appendChild(rating)

//rating icon inladen
    let ratingicon = document.createElement("img")
    ratingicon.src = musea.ratingicon
    ratingicon.alt = musea.ratingiconalt
    ratingicon.classList.add("rating-icon")
    midcontent.appendChild(ratingicon)

//create right content
    let rightcontent = document.createElement('section')
    museaCard.appendChild(rightcontent)

//top openings tijden title inladen
    let openingstijdenh3 = document.createElement("h3")
    openingstijdenh3.innerHTML = 'Openings tijden'
    rightcontent.appendChild(openingstijdenh3);

//top openings tijden list inladen
    let openingstijdenlijst = document.createElement("ul")
    rightcontent.appendChild(openingstijdenlijst);

//openings tijden inladen
    for (let t = 0; t < 7; t++) {
        let tijdenlistitem = document.createElement("li")
        tijdenlistitem.innerHTML = musea.openingstijden[t]
        openingstijdenlijst.appendChild(tijdenlistitem)
    }

//creat lees button
    let leesmeerbutton = document.createElement("button")
    leesmeerbutton.innerHTML = 'Lees meer'
    leesmeerbutton.classList.add("lees")
    rightcontent.appendChild(leesmeerbutton)

//creat save button
    let savenbutton = document.createElement("button")
    savenbutton.innerHTML = 'save ' + musea.name
    savenbutton.id = musea.name
    savenbutton.classList.add("save")
    savenbutton.classList.add("notsaved")
    rightcontent.appendChild(savenbutton)
}
//error code
function ajaxErrorHandler(error){
    console.error(error)
}

//kijk of hij opgeslagen is en verander icon
function loadSaves(name) {
    if (localStorage.getItem("savelist-musea")) {
        saveitems = JSON.parse(localStorage.getItem("savelist-musea"));
        for (let i = 0; i < saveitems.length; i++) {

            console.log(saveitems[i])

            /*if()

            let name = saveitems[i].replace("save ", "")
            let parent = document.getElementById(name)
            let button = parent.getElementsByTagName('button')[1]

            button.classList.add("saved")
            button.classList.remove("notsaved")
            button.innerHTML = button.innerHTML.replace("save", "unsave");
            }*/
        }
    }
}

//klik function
function ItemWasClicked(e) {
//save action
    if (e.target.classList.item(0) === "save") {
        if (e.target.classList.item(1) === "notsaved") {
            e.target.classList.add("saved")
            e.target.classList.remove("notsaved")
            console.log(e.target.innerHTML)
            saveitems.push(e.target.innerHTML)
            e.target.innerHTML = e.target.innerHTML.replace("save", "unsave");
            localStorage.setItem("savelist-musea", JSON.stringify(saveitems));
        } else if (e.target.classList.item(1) === "saved") {
            e.target.classList.add("notsaved")
            e.target.classList.remove("saved")
            console.log(e.target.innerHTML)
            let remove = saveitems.indexOf(e.target.innerHTML.replace("unsave", "save"))
            saveitems.splice(remove, 1)
            e.target.innerHTML = e.target.innerHTML.replace("unsave", "save");
            localStorage.setItem("savelist-musea", JSON.stringify(saveitems));
        }
    }

//lees function
    if (e.target.classList.item(0) === "lees") {
        if (detailpage.id === "hide") {
            detailpage.id = "show"
            document.body.classList.add("noscroll")
            console.log(e.target.dataset.id)
            console.log(museadetails[e.target.dataset.id])
        } else if (detailpage.id === "show") {
            detailpage.id = "hide"
            document.body.classList.remove("noscroll")
        }
    }
}