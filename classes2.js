
class LibraryItem{
    constructor(title = 'Harry Potter', id = 123432, isAvailable = true){
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }
    checkOut() {
        return this.isAvailable = false
    }
    returnItem() {
        return this.isAvailable = true
    }

}

class book extends LibraryItem{
    constructor(author, genre){
        super();
        this.author = author;
        this.genre = genre;
    }
}

class dvd extends LibraryItem{
    constructor(director, duration){
        super();
        this.director = director;
        this.duration = duration;
    }
}

class magazine extends LibraryItem{
    constructor(issueNumber, publisher){
        super();
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
}
let bookItem = new book('J.K. Rowling', 'Fantasy');
let dvdItem = new dvd('Another J.K. Rowling', '52 hours');
let magazineItem = new magazine(9878676, 'Vogue');
let userLibraryItem = new LibraryItem('Harry Potter',123345 , true);



magazineItem.checkOut();
console.log(magazineItem);

bookItem.checkOut();
console.log(magazineItem);

magazineItem.returnItem();
console.log(magazineItem);
console.log("Below are the inherited classes and the last one is a userLibrary Item:\n");
console.log(bookItem);
console.log(dvdItem);
console.log(magazineItem);
console.log(userLibraryItem);
