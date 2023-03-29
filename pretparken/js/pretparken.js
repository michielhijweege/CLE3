window.addEventListener('load', init);

const apiUrl = 'http://localhost/CLE3/pretparken';
let section;
let list;
let saveitems = [];
let detailpage;
let pretparkData = [];

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
    .then(parkenSuccesHandler)
    .catch(ajaxErrorHandler)

    createdetailpagina()
}

//create detail pagina
function createdetailpagina(){
    const detailpageholder = document.createElement('section')
    detailpageholder.classList.add('detailpageholder')
    detailpage = document.createElement('section')
    detailpage.classList.add('detailpage')
    detailpage.id = 'hide'

    document.body.appendChild(detailpageholder)
    detailpageholder.appendChild(detailpage)
    detailpage.addEventListener('click', ItemWasClicked)
}

//create een section
function parkenSuccesHandler(data){
    for (let pretparken of data) {
        const newpretparkdiv = document.createElement('section')
        newpretparkdiv.classList.add("content-box")
        newpretparkdiv.dataset.name = pretparken.name;
        list.appendChild(newpretparkdiv)

        fetch(apiUrl + '?id=' + pretparken.id)
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
function detailSuccesHandler(pretpark){
    let pretparkCard = document.querySelector(`.content-box[data-name='${pretpark.name}']`);
    //logo inladen
    let logoimg = document.createElement("img")
    logoimg.src = pretpark.img
    logoimg.alt = pretpark.imgalt
    logoimg.classList.add("logo-pretpark")
    pretparkCard.appendChild(logoimg)

    //create mid content
    let midcontent = document.createElement('section')
    midcontent.classList.add('midcontent')
    pretparkCard.appendChild(midcontent)

    //title inladen
    let title = document.createElement('h2');
    title.innerHTML = pretpark.name;
    midcontent.appendChild(title);

    //link inladen
    let link = document.createElement("a")
    link.innerHTML = pretpark.linktext
    link.href = pretpark.link
    link.setAttribute('target', '_blank');
    midcontent.appendChild(link);

    //top atracties title inladen
    let top5listh3 = document.createElement("h3")
    top5listh3.innerHTML = 'Top atracties'
    midcontent.appendChild(top5listh3);

    //top atracties list inladen
    let top5list = document.createElement("ul")
    midcontent.appendChild(top5list);

    //top atracties inladen
    for (let t = 0; t < 5; t++) {
        let top5listitem = document.createElement("li")
        top5listitem.innerHTML = pretpark.topatracties[t]
        top5list.appendChild(top5listitem)
    }

    //create right content
    let rightcontent = document.createElement('section')
    pretparkCard.appendChild(rightcontent)

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
        tijdenlistitem.innerHTML = pretpark.openingstijden[t]
        openingstijdenlijst.appendChild(tijdenlistitem)
    }

    //creat lees button
    let leesmeerbutton = document.createElement("button")
    leesmeerbutton.innerHTML = 'Lees meer'
    leesmeerbutton.classList.add("lees")
    leesmeerbutton.dataset.id = pretpark.id;
    rightcontent.appendChild(leesmeerbutton)

    //creat save button
    let savenbutton = document.createElement("button")
    savenbutton.innerHTML = 'save ' + pretpark.name
    savenbutton.id = pretpark.name
    savenbutton.classList.add("save")
    savenbutton.classList.add("notsaved")
    rightcontent.appendChild(savenbutton)

    pretparkData[pretpark.id] = pretpark

    loadSaves(pretpark.name)
}

//kijk of hij opgeslagen is en verander icon
function loadSaves(pretparkname) {
    if(localStorage.getItem("savelist")){
        saveitems = JSON.parse(localStorage.getItem("savelist"));
        for (let i = 0; i < saveitems.length; i++){
            if(saveitems[i] === "save " + pretparkname){
                let button = document.getElementById(pretparkname)
                button.classList.add("saved")
                button.classList.remove("notsaved")
                button.innerHTML = button.innerHTML.replace("save", "unsave");
            }
        }
    }
}

//detail pagina
function showditail(id){
    //find detailcontent
    const  detailcontent = document.getElementsByClassName('detailpage')[0]
    //empty detailcontent
    detailcontent.innerHTML = ''

    //create button
    let closebutton = document.createElement("button")
    closebutton.innerHTML = 'Lees minder'
    closebutton.classList.add("lees")
    detailcontent.appendChild(closebutton)

    //title inladen
    let title = document.createElement('h2');
    title.innerHTML = pretparkData[id].name;
    detailcontent.appendChild(title);
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
            localStorage.setItem("savelist", JSON.stringify(saveitems));
        } else if (e.target.classList.item(1) === "saved") {
            e.target.classList.add("notsaved")
            e.target.classList.remove("saved")
            console.log(e.target.innerHTML)
            let remove = saveitems.indexOf(e.target.innerHTML.replace("unsave", "save"))
            saveitems.splice(remove, 1)
            e.target.innerHTML = e.target.innerHTML.replace("unsave", "save");
            localStorage.setItem("savelist", JSON.stringify(saveitems));
        }
    }
    //lees function
    if (e.target.classList.item(0) === "lees") {
        if (detailpage.id === "hide") {
            detailpage.id = "show"
            document.body.classList.add("noscroll")
            showditail(e.target.dataset.id)
        } else if (detailpage.id === "show") {
            detailpage.id = "hide"
            document.body.classList.remove("noscroll")
        }
    }
}

//error code
function ajaxErrorHandler(error){
    console.error(error)
}