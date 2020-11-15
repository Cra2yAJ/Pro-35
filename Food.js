class Food {
    constructor(){
        foodStock;
        lastFed;
    }

    preload()
    {
     milkImg = loadImage("images/Milk.png");
    }
    getFoodstock(){
        /*var gamestateref = database.ref('gameState');
        gamestateref.on("value",function(data){
            gameState=data.val();
        })*/
    }
    
    updateFoodStock(){
        /*database.ref('/').update({
            gameState:state
        })*/
    }

    deductFood(){

    }
    display(){
        milk.addImage(milkImg);

    }

}
