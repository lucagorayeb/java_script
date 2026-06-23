const cart = {
    items : [
        {
            product : "Baggy",
            quantity : 5,
            price : 100.00
        },
    ], 
    push_item : function (new_item){
        this.items.push(new_item);
    },
    remove_item : function (){
        this.items.pop();
    }, 
    calculate_subtotal : function (item_name){
        for(item in this.items){
            if(this.items[item]["product"] == item_name){
                return this.items[item]["quantity"] * this.items[item]["price"];
            }
        }
    },
    update_quantity : function (item_name, new_quantity){
        for(item in this.items){
            if(this.items[item]["product"] == item_name){
                this.items[item]["quantity"] = new_quantity;
            }
        } 
    },
    print_receipt : function (){
        for(item in this.items){
            console.log(this.items[item]["product"]);
            console.log(this.items[item]["quantity"] + " x " + this.items[item]["quantity"]);
        }
    }
}

for (item in cart.items){
    console.log(cart.items[item]);
} 

//console.log(cart.calculate_subtotal("Baggy"));
//cart.update_quantity("Baggy", 6);

/* for (item in cart.items){
    console.log(cart.items[item]);
}  */

cart.print_receipt();