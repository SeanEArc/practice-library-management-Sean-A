
class LibraryItem{
    constructor(title = 'Harry Potter', id = 123432, isAvailable = true){
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }
    checkOut() {
        this.isAvailable = false
        console.log(`\nPlease make sure to return ${this.title}`)
    }
    returnItem() {
        this.isAvailable = true
        console.log(`\nThank you for returning ${this.title}`)
    }

}

class book extends LibraryItem{
    constructor(author, genre){
        super();
        this.author = author;
        this.genre = genre;
    }
    bookDetails(){
        console.log(`This book is written by ${this.author} and is considered a ${this.genre} book.`)
    }
}

class dvd extends LibraryItem{
    constructor(director, duration){
        super();
        this.director = director;
        this.duration = duration;
    }
    movieDetails(){
        console.log(`This movie was directed by ${this.director} and is ${this.duration} hours long.`)
    }
}

class magazine extends LibraryItem{
    constructor(issueNumber, publisher){
        super();
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
    magazineDetails(){
        console.log(`This magazine's issue number is ${this.issueNumber} and was published by ${this.publisher} `)
    }
}
let bookItem = new book('J.K. Rowling', 'Fantasy');
bookItem.bookDetails()
let dvdItem = new dvd('Another J.K. Rowling', '52 hours');
dvdItem.movieDetails()
let magazineItem = new magazine(9878676, 'Vogue');
magazineItem.magazineDetails()

let userLibraryItem = new LibraryItem('Harry Potter',123345 , true);



magazineItem.checkOut();
console.log(magazineItem);

bookItem.checkOut();
console.log(magazineItem);

magazineItem.returnItem();
console.log(magazineItem);

console.log("\nBelow are the inherited classes and the last one is a userLibrary Item:");
console.log(bookItem);
console.log(dvdItem);
console.log(magazineItem);
console.log(userLibraryItem);
