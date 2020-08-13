class ItemView{
    constructor(view){
        this.view = view;
        this.columnCount = 4;

        this.itemRowViews = [];
        this.itemContainers = []
    }

    //random comment
    display(itemsToDisplay){
        this.clear();

        var counter = 0;
        for(var i = 0; i < this.itemRowViews.length; i++){

            var itemRowView = this.itemRowViews[i];
            
            for(var j = 0; j < this.columnCount; j++){
                if(counter >= itemsToDisplay.length){
                    break;
                }

                var itemContainer = this.itemContainers[counter];
                var item = itemsToDisplay[counter];

                itemContainer.setName(item.name);
                itemContainer.setImage(item.color);

                itemRowView.append(itemContainer);
                itemRowView.itemContainers[counter] = itemContainer;

                counter++;
            }

            this.append(itemRowView);
        }
    }

    initialize(count){

        this.clear();

        console.log("Length of array: " + count);
    
        var rows = count / this.columnCount;
    
        rows = Math.ceil(rows);
    
        var counter = 0;
        for(var i = 0; i < rows; i++){
            var itemRowElement = document.createElement("div");
            itemRowElement.className = "item-row-view";

            var itemRowView = new ItemRowView(itemRowElement);

            this.itemRowViews[i] = itemRowView;
            
            for(var j = 0; j < this.columnCount; j++){
                if(counter >= count){
                    break;
                }
    
                var itemContainer = newItemContainer();

                this.itemContainers[counter] = itemContainer;

                /*
                itemContainer.div.addEventListener("dblclick", function(){
                    //addItemToBuild(itemContainer.itemName.textContent);
                    console.log(itemContainer.itemName.textContent)
                })
                */
                counter++;
            }
        }
    }

    append(itemRowView){
        this.view.appendChild(itemRowView.view);
    }

    clear(){
        this.view.innerHTML = "";
        for(var i = 0; i < this.itemRowViews.length; i++){
            this.itemRowViews[i].clear();
        }
    }
}