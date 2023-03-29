window.addEventListener('load', init);

//Volgende const zijn voor het ophalen van de bioscopen en de deatails ervan uit de webservice
const apiUrl = "http://localhost/CLE3/bioscopen/webservice";

let section;
let list;
let detailpage;

function init(){
    list = document.getElementById("content")
    list.addEventListener('click', ItemWasClicked)

    fetch(apiUrl)
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then(biosSuccesHandler)
        .catch(ajaxErrorHandler)

    createdetailpagina()
}


function createdetailpagina(){
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

function biosSuccesHandler(data){
    for (let bios of data) {
        console.log(bios)
        const newbiosdiv = document.createElement('section')
        newbiosdiv.classList.add("content-box")
        newbiosdiv.dataset.name = bios.name;
        list.appendChild(newbiosdiv)

        fetch(apiUrl + '?id=' + bios.id)
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

function detailSuccesHandler(bios) {
    console.log(bios)
    let biosCard = document.querySelector(`.content-box[data-name='${bios.name}']`);
    console.log(biosCard)

//logo inladen
    let logoimg = document.createElement("img")
    logoimg.src = bios.img
    logoimg.alt = bios.imgalt
    logoimg.classList.add("logo-bios")
    biosCard.appendChild(logoimg)




//create mid content
    let midcontent = document.createElement('section')
    midcontent.classList.add('midcontent')
    biosCard.appendChild(midcontent)

//title inladen
    let title = document.createElement('h2');
    title.innerHTML = bios.name;
    midcontent.appendChild(title);

//link inladen
    let link = document.createElement("a")
    link.innerHTML = bios.linktekst;
    link.href = bios.link;
    link.setAttribute('target', '_blank');
    midcontent.appendChild(link);

//create right content
    let rightcontent = document.createElement('section')
    biosCard.appendChild(rightcontent)


//top openings tijden title inladen
    let openingstijdenh3 = document.createElement("h3")
    openingstijdenh3.innerHTML = 'openingstijden'
    rightcontent.appendChild(openingstijdenh3);

/*
//top openings tijden list inladen
    let openingstijdenlijst = document.createElement("ul")
    rightcontent.appendChild(openingstijden);
 */

//openings tijden inladen
    for (let t = 0; t < 7; t++) {
        let tijdenlistitem = document.createElement("li")
        tijdenlistitem.innerHTML = bios.openingstijden[t]
        rightcontent.appendChild(tijdenlistitem)
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








function ajaxErrorHandler(error)
{
    console.log(" ")
}

function ItemWasClicked(e){
    //lees function
    if(e.target.classList.item(0) === "lees"){
        if(detailpage.id === "hide"){
            detailpage.id = "show"
            document.body.classList.add("noscroll")
        } else if(detailpage.id === "show"){
            detailpage.id = "hide"
            document.body.classList.remove("noscroll")
        }
    }
}