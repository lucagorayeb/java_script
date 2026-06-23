const player = {
    name : "Luca",
    level : 1,
    hp : 100,
    attack : 5,
    inventory : [],

    attackEnemy : function (){
        return  this.attack;
    },

    heal : function (){
        if(this.hp < 100){
            this.heal += 5;
        }else{
            return "Maxium hp restored.";
        }
    },

    takeDamage : function (){
        if(this.hp >= 0){
            return "Life is zero.";
        }else{
            this.heal -= 5;
        }
    },

    addItem : function(item){
        if(this.inventory.length() < 10 ){
            this.inventory.push(item);
        }else{
            return "Inventory is full.";
        }
    },

    showStatus : function(){
        return {
            "Jogador" : this.name,
            "Level"   : this.level,
            "Healthy Points" : this.hp
        };
    }
}