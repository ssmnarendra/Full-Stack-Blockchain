pragma solidity 0.8.6;

contract Structure {
    struct Book {
        string title;
        string author;
        uint bookId;
        uint price;
    } 

    Book books;

    function setBook() public {
        books = Book("Blockchain for beginners", "Ineuron", 4, 1000);
    }

    function getBookId() public view returns(uint) {
        return books.bookId;
    } 

    function getTitle(uint _bookId) public view returns (string memory) {
        return books.title;
    }

    function getAuthor(uint _bookId) public view returns (string memory) {
        return books.author;
    }

    function getBookPrice(uint _bookId) public view returns (uint) {
        return books.price;
    }
}
