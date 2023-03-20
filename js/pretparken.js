window.addEventListener('load', init);

let list;
let saveitems = [];

function init()
{
    list = document.getElementById('content');
    list.addEventListener('click', saveItemWasClicked)
    loadSaves();
}

function loadSaves(){
    if(localStorage.getItem('savelist')){
        saveitems = JSON.parse( localStorage.getItem( 'savelist' ) );
        for (let i = 0; i < saveitems.length; i++){
            let name = saveitems[i].replace("save ", "")
            let button = document.getElementById(name)
            button.classList.add("saved")
            button.classList.remove("notsaved")
            button.innerHTML = button.innerHTML.replace("save", "unsave");
        }
    }
}

function saveItemWasClicked(e){
    if(e.target.classList.item(0) === "save"){
        if(e.target.classList.item(1) === "notsaved")
        {
            e.target.classList.add("saved")
            e.target.classList.remove("notsaved")
            console.log(e.target.innerHTML)
            saveitems.push(e.target.innerHTML)
            e.target.innerHTML = e.target.innerHTML.replace("save", "unsave");
            localStorage.setItem('savelist', JSON.stringify(saveitems));
        }
        else if(e.target.classList.item(1) === "saved")
        {
            e.target.classList.add("notsaved")
            e.target.classList.remove("saved")
            console.log(e.target.innerHTML)
            let remove = saveitems.indexOf(e.target.innerHTML.replace("unsave", "save"))
            saveitems.splice(remove,1)
            e.target.innerHTML = e.target.innerHTML.replace("unsave", "save");
            localStorage.setItem('savelist', JSON.stringify(saveitems));
        }
    }
}