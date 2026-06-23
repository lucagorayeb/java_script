const library = {
    books : [
        {
            title : "Dracula",
            author : "Bram Stroker",
            available : true
        },
    ],
    borrowBook : function(title){
        is_available = this.isAvailable(title);
        if(is_available[0]){
            this.books[is_available[1]]["available"] = false;
            return "Its available. Goog reading.";
        }else{
            return "Its not available.";
        }
    },

    returnBook : function(title){
        is_available = this.isAvailable(title);
        if(!is_available[0]){
            this.books[is_available[1]]["available"] = true;
            return "Borrowed. Thank you.";
        }else{
            return "Was not borrowed available.";
        }
    },

    isAvailable : function(title){
        for(book in this.books){
            if(this.books[book]["title"] == title){
                if(this.books[book]["available"] == true){
                    return [true, book];
                }else{
                    return false;
                }
            }
        }
    },

    listAvailableBooks : function(){
        for(book in this.books){
            if(this.books[book]["available"] == true){
                console.log(this.books[book]["title"]);
            }
        }
    },

    listBorrowedBooks : function(){
        for(book in this.books){
            if(this.books[book]["available"] == false){
                console.log(this.books[book]["title"]);
            }
        }
    },

    pushBook : function (new_book){
        this.books.push(new_book);
    },
    removeBook : function (){
        this.books.pop();
    }
}

new_book = {title : "Morro dos Ventos Uivantes", author : "Emily Bronte", available : true};

library.pushBook(new_book); 

/* for (book in library.books){
    console.log(library.books[book]);
}  */

library.borrowBook("Dracula");
console.log("Available books: ");
library.listAvailableBooks(); 

console.log("Unavailable books: ");
library.listBorrowedBooks();