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
        .then(pageSuccesHandler)
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
function pageSuccesHandler(detail){
    for (let musea of detail) {
        console.log(detail)
        const newdetaildiv = document.createElement('section')
        newdetaildiv.classList.add("content-box")
        newdetaildiv.dataset.name = musea.name;
        list.appendChild(newdetaildiv)

        fetch(apiUrl + '?id=' + musea.id)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(reviewSuccesHandler)
            .catch(ajaxErrorHandler);
    }
}

//laad en zet de detail data
function reviewSuccesHandler(review) {
    console.log(museadetails[review].name)
    const reviewCard = document.getElementsByClassName('detailpage')[0]
    reviewCard.innerHTML = ''


//create left content
    let leftcontent = document.createElement('section')
    leftcontent.classList.add('content-vak')
    reviewCard.appendChild(leftcontent)

//title inladen
    let title = document.createElement('h2');
    title.innerHTML = museadetails[review].name;
    leftcontent.appendChild(title);

//review title inladen
    let reviewTitle = document.createElement('h3');
    reviewTitle.innerHTML = museadetails[review].reviewtitle
    reviewTitle.id = 'a'
    leftcontent.appendChild(reviewTitle)

//review rating inladen
    let reviewRating = document.createElement('h3');
    reviewRating.innerHTML = museadetails[review].reviewrating
    reviewRating.id = 'b'
    leftcontent.appendChild(reviewRating)

//review text inladen
    let reviewText = document.createElement('h4');
    reviewText.innerHTML = museadetails[review].reviewtext
    reviewText.id = 'c'
    leftcontent.appendChild(reviewText)

//create right content
    let rightcontent = document.createElement('section')
    rightcontent.classList.add('content-vak')
    reviewCard.appendChild(rightcontent)

//title input field inladen
    let titleInput = document.createElement('h3')
    titleInput.innerHTML = museadetails[review].titleinput
    titleInput.id = 'titleinput'
    const form = document.createElement("FORM");
    rightcontent.appendChild(form);
    const x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.placeholder = "Typ de Title hier";
    x.id = 'x'
    form.appendChild(x)
    form.appendChild(titleInput)

//rating input field inladen
    let ratingInput = document.createElement('h3')
    ratingInput.innerHTML = museadetails[review].ratinginput
    const y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.placeholder = "Typ de Beoordeling hier";
    y.id = 'y'
    form.appendChild(y)
    form.appendChild(ratingInput)

//review input field inladen
    let reviewInput = document.createElement('h4')
    reviewInput.innerHTML = museadetails[review].reviewinput
    const z = document.createElement("INPUT");
    z.setAttribute("type", "text");
    z.placeholder = "Typ de Review hier";
    z.id = 'z'
    form.appendChild(z)
    form.appendChild(reviewInput)

//create post button
    let postbutton = document.createElement("button")
    postbutton.innerHTML = 'Post review'
    postbutton.type = 'submit'
    form.addEventListener('submit', post);
    form.dataset.id = museadetails[review].id;
    form.appendChild(postbutton)

//create close button
    let closebutton = document.createElement("button")
    closebutton.innerHTML = 'Lees minder'
    closebutton.classList.add("lees")
    rightcontent.appendChild(closebutton)
}

function post(e){
    e.preventDefault();
    inputFieldx = document.getElementById('x')
    inputFieldy = document.getElementById('y')
    inputFieldz = document.getElementById('z')
    let inputValuex = inputFieldx.value;
    let inputValuey = inputFieldy.value;
    let inputValuez = inputFieldz.value;
    if (inputValuex !== '' && inputValuey !== '' && inputValuez !== '') {
    museadetails[e.target.dataset.id].reviewtitle += inputValuex
    museadetails[e.target.dataset.id].reviewrating += inputValuey
    museadetails[e.target.dataset.id].reviewtext += inputValuez
    let instantpostx = document.getElementById('a')
        instantpostx.innerHTML = inputValuex
    let instantposty = document.getElementById('b')
        instantposty.innerHTML = inputValuey
    let instantpostz = document.getElementById('c')
        instantpostz.innerHTML = inputValuez
        } else {
        console.log('leeg');
    }
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
    logoimg.classList.add("content-vak")
    museaCard.appendChild(logoimg)

//create mid content
    let midcontent = document.createElement('section')
    midcontent.classList.add('content-vak')
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
    rightcontent.classList.add('content-vak')
    museaCard.appendChild(rightcontent)

//top openings tijden title inladen
    let openingstijdenh3 = document.createElement("h3")
    openingstijdenh3.innerHTML = 'Openings tijden'
    rightcontent.appendChild(openingstijdenh3);

//top openings tijden list inladen
    let openingstijdenlijst = document.createElement("table")
    rightcontent.appendChild(openingstijdenlijst);

//openings tijden inladen
    for (let t = 0; t < 7; t++) {
        let tijdenlistitem = document.createElement("tr")

        let dag = document.createElement("td")
        dag.innerHTML = "<b>" + musea.openingsdagen[t] + "</b>"

        let tijd = document.createElement("td")
        tijd.innerHTML = musea.openingstijden[t]

        tijdenlistitem.appendChild(dag)
        tijdenlistitem.appendChild(tijd)

        openingstijdenlijst.appendChild(tijdenlistitem)
    }
//creat lees button
        let leesmeerbutton = document.createElement("button")
        leesmeerbutton.innerHTML = 'Lees meer'
        leesmeerbutton.classList.add("lees")
        leesmeerbutton.dataset.id = musea.id;
        rightcontent.appendChild(leesmeerbutton)

        museadetails[musea.id] = musea
        console.log(musea)

//creat save button
        let savenbutton = document.createElement("button")
        savenbutton.innerHTML = 'save ' + musea.name
        savenbutton.id = musea.name
        savenbutton.classList.add("save")
        savenbutton.classList.add("notsaved")
        rightcontent.appendChild(savenbutton)

//save het musea info in museadetails
        museadetails[musea.id] = musea

        loadSaves(musea.name)
}

//kijk of het musea is opgeslagen
function loadSaves(museaname) {
    if(localStorage.getItem("savelist")){
        saveitems = JSON.parse(localStorage.getItem("savelist-musea"));
        for (let i = 0; i < saveitems.length; i++){
            if(saveitems[i] === "save " + museaname){
                let button = document.getElementById(museaname)
                button.classList.add("saved")
                button.classList.remove("notsaved")
                button.innerHTML = button.innerHTML.replace("save", "unsave");
            }
        }
    }
}

//error code
function ajaxErrorHandler(error){
    console.error(error)
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
            reviewSuccesHandler(e.target.dataset.id)
            console.log(e.target.dataset.id)
        } else if (detailpage.id === "show") {
            detailpage.id = "hide"
            document.body.classList.remove("noscroll")
        }
    }
}