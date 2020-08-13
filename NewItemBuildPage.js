var itemView = document.getElementById("item-view");
var itemSearch = document.getElementById("item-search");

var heroGrid = document.getElementById("hero-grid");

var view = new ItemView(itemView);

itemSearch.addEventListener("input", function(){
    view.display(callSearch(itemSearch.value));
});

function createItemContainers(itemsArray){
    view.initialize(itemsArray.length);
    
    for(var i = 0; i < view.itemContainers.length; i++){
        var itemContainer = view.itemContainers[i];

        
        itemContainer.container.addEventListener("dblclick", function(event){
            //
        });
    }

    view.display(itemsArray);
}

//Testing the functionality of adding/removing item containers and rows from the item view
function doSomething(){
    container = itemContainers[0];

    itemView.innerHTML = "";

    var aspectContainer = document.createElement("div");
    aspectContainer.className = "item-row-view";

    aspectContainer.appendChild(container.div);

    itemView.appendChild(aspectContainer);
    
    console.log("DOING SOMETHING " + container.itemName.textContent);
}

function setHeroImage(src, name){

    var image = document.getElementById("hero-portrait");
    var heroText = document.getElementById("hero-name");

    image.src = src;
    heroText.textContent = name;
}

function displayHeroPortraits(){

    console.log(heroPortraits.length);
    
    for(var i = 0; i < heroPortraits.length; i++){
        let heroDiv = document.createElement("div");

        let heroImage = document.createElement("img");

        heroImage.src = heroPortraits[i].portrait;
        heroImage.id = heroPortraits[i].name;

        heroDiv.appendChild(heroImage);

        heroGrid.appendChild(heroDiv);

        heroImage.addEventListener("click", function(){
            setHeroImage(heroImage.src, heroImage.id);
            getHeroDetails(heroImage.id, setHero);
        });

    }
}

