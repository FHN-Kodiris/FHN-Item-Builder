var itemsDictionary;
var itemsArray = [];

var heroPortraits = returnHeroPortraitList();

displayHeroPortraits();

var build = new ItemBuild();


returnAllItems(setItems)

function setItems(items){
    itemsDictionary = items;
    
    count = 0;
    for (var [key, value] of Object.entries(itemsDictionary)){
        itemsArray[count] = value;
        count++;
    }

    createItemContainers(itemsArray);
    //doSomething();
}

function callSearch(search){
    return searchItems(search, itemsDictionary);
}

function addItemToBuild(itemName){
    var item = itemsDictionary[itemName];

    build.addItem(item);

    console.log(itemName);
}

function setHero(hero){

    build.hero = hero;

    

}