window.addEventListener('load', init);

const apiUrl = 'json/musea.json';
const apidetailUrl = 'json/museadetails.json';
let section;
let list;
let saveitems = [];
let detailpage;

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

    let closebutton = document.createElement("button")
    closebutton.innerHTML = 'Lees minder'
    closebutton.classList.add("lees")

    document.body.appendChild(detailpageholder)
    detailpageholder.appendChild(detailpage)
    detailpage.appendChild(closebutton)
    detailpage.addEventListener('click', ItemWasClicked)
}
/*
//create een section
function parkenSuccesHandler(data){
    console.log(data)
    for (let i = 0; i < data.musea.length; i++){
        const newmuseadiv = document.createElement('section')
        newmuseadiv.classList.add("content-box")
        newmuseadiv.classList.add(data.musea[i].title)
        newmuseadiv.id = data.musea[i].title

        let img = document.createElement("img")
        img.src = data.musea[i].img
        img.classList.add("logo-musea")
        newmuseadiv.appendChild(img)

        let midcontent = document.createElement('section')
        midcontent.classList.add('midcontent')

        let h2 = document.createElement("h2")
        h2.innerHTML = data.musea[i].title

        newmuseadiv.appendChild(img)
        newmuseadiv.appendChild(midcontent)
        midcontent.appendChild(h2)

        list.appendChild(newmuseadiv)
    }
    fetch(apidetailUrl)
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then(detailSuccesHandler)
        .catch(ajaxErrorHandler)
}

//laad en zet de detail data

function detailSuccesHandler(data){
    for (let i = 0; i < data.museadetail.length; i++) {
        let link = document.createElement("a")
        link.innerHTML = data.museadetail[i].linktext
        link.href = data.museadetail[i].link
        link.setAttribute('target', '_blank');

        let top5listh3 = document.createElement("h3")
        top5listh3.innerHTML = 'Top atracties'

        let top5list = document.createElement("ul")

        for (let t = 0; t < 5; t++) {
            let top5listitem = document.createElement("li")
            top5listitem.innerHTML = data.pretparkdetail[i].topatracties[t]
            top5list.appendChild(top5listitem)
        }

        let rightcontent = document.createElement('section')

        let openingstijdenh3 = document.createElement("h3")
        openingstijdenh3.innerHTML = 'Openings tijden'

        let openingstijden = document.createElement("ul")

        for (let t = 0; t < 7; t++) {
            let openingstijd = document.createElement("li")
            openingstijd.innerHTML = data.pretparkdetail[i].openingstijden[t]
            openingstijden.appendChild(openingstijd)
        }

        let leesmeerbutton = document.createElement("button")
        leesmeerbutton.innerHTML = 'Lees meer'
        leesmeerbutton.classList.add("lees")
        leesmeerbutton.classList.add(data.pretparkdetail[i].title)

        let savenbutton = document.createElement("button")
        savenbutton.innerHTML = 'save ' + data.pretparkdetail[i].title
        savenbutton.id = data.pretparkdetail[i].title
        savenbutton.classList.add("save")
        savenbutton.classList.add("notsaved")

        let newpretparkdiv = document.getElementById(data.pretparkdetail[i].title)
        let midcontent = newpretparkdiv.getElementsByTagName('section')[0]

        midcontent.appendChild(link)
        midcontent.appendChild(top5listh3)
        midcontent.appendChild(top5list)
        newpretparkdiv.appendChild(rightcontent)
        rightcontent.appendChild(openingstijdenh3)
        rightcontent.appendChild(openingstijden)
        rightcontent.appendChild(leesmeerbutton)
        rightcontent.appendChild(savenbutton)
    }
    loadSaves()
}
*/

//error code
function ajaxErrorHandler(error){
    console.error(error)
}

//kijk of hij opgeslagen is en verander icon
function loadSaves(){
    if(localStorage.getItem("savelist")){
        saveitems = JSON.parse( localStorage.getItem( "savelist" ) );
        for (let i = 0; i < saveitems.length; i++){
            let name = saveitems[i].replace("save ", "")
            let parent = document.getElementById(name)
            let button = parent.getElementsByTagName('button')[1]
            button.classList.add("saved")
            button.classList.remove("notsaved")
            button.innerHTML = button.innerHTML.replace("save", "unsave");
        }
    }
}

//klik function
function ItemWasClicked(e){
    //save action
    if(e.target.classList.item(0) === "save"){
        if(e.target.classList.item(1) === "notsaved")
        {
            e.target.classList.add("saved")
            e.target.classList.remove("notsaved")
            console.log(e.target.innerHTML)
            saveitems.push(e.target.innerHTML)
            e.target.innerHTML = e.target.innerHTML.replace("save", "unsave");
            localStorage.setItem("savelist", JSON.stringify(saveitems));
        }
        else if(e.target.classList.item(1) === "saved")
        {
            e.target.classList.add("notsaved")
            e.target.classList.remove("saved")
            console.log(e.target.innerHTML)
            let remove = saveitems.indexOf(e.target.innerHTML.replace("unsave", "save"))
            saveitems.splice(remove,1)
            e.target.innerHTML = e.target.innerHTML.replace("unsave", "save");
            localStorage.setItem("savelist", JSON.stringify(saveitems));
        }
    }
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