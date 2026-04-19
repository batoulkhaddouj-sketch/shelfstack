// =====================
// Types & Interfaces
// =====================

type BookId = string;

interface Book {
  readonly id: BookId;
  title: string;
  isbn: string;
  author: string;
}

interface Loan {
  id: string;
  bookId: BookId;
  memberId: string;
}

// =====================
// Functions
// =====================

// add book (immutable)
function addBook(list: Book[], book: Book): Book[] {
  return [...list, book];
}

// find by ISBN
function findByIsbn(list: Book[], isbn: string): Book | undefined {
  return list.find((b) => b.isbn === isbn);
}

// =====================
// Demo
// =====================

let books: Book[] = [];

books = addBook(books, {
  id: "b1",
  title: "Clean Code",
  isbn: "978-0132350884",
  author: "Martin",
});

books = addBook(books, {
  id: "b2",
  title: "TS Guide",
  isbn: "111-222",
  author: "Alice",
});

const found = findByIsbn(books, "978-0132350884");

console.log(found);