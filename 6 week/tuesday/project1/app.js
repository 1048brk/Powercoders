let books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        isSoldOut: false,
        price: 12.99
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        isSoldOut: true,
        price: 10.99
    },
    {
        title: "1984",
        author: "George Orwell",
        isSoldOut: false,
        price: 8.99
    }
];


books.sort((a, b) => a.title.localeCompare(b.title));
