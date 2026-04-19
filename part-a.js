// =====================
// LibraryItem (Base Class)
// =====================
class LibraryItem {
  constructor({ id, title }) {
    this.id = id;
    this.title = title;
    this.isAvailable = true;
  }

  describe() {
    return `Item: ${this.title} (ID: ${this.id})`;
  }

  borrow() {
    this.isAvailable = false;
  }

  returnItem() {
    this.isAvailable = true;
  }
}

// =====================
// Book (Child Class)
// =====================
class Book extends LibraryItem {
  constructor({ id, title, isbn, author }) {
    super({ id, title });
    this.isbn = isbn;
    this.author = author;
  }

  // override method
  describe() {
    return `Book: ${this.title} by ${this.author} (ISBN: ${this.isbn})`;
  }
}

// =====================
// Member
// =====================
class Member {
  #balance = 0;

  constructor(id) {
    this.id = id;
  }

  deposit(n) {
    this.#balance += n;
  }

  getBalance() {
    return this.#balance;
  }
}

// =====================
// LibraryCatalog
// =====================
class LibraryCatalog {
  constructor() {
    this.items = [];
  }

  addItem(book) {
    this.items.push(book);
  }

  static makeId(prefix) {
    return prefix + Math.floor(Math.random() * 1000);
  }

  registerLoan({ memberId, itemId }) {
    // object destructuring used above 👆
    const item = this.items.find((b) => b.id === itemId);

    if (item && item.isAvailable) {
      item.borrow();
      console.log(`Item ${itemId} borrowed by member ${memberId}`);
    } else {
      console.log(`Item not available`);
    }
  }

  snapshotStats() {
    const total = this.items.length;
    const available = this.items.filter((b) => b.isAvailable).length;

    return { total, available };
  }
}

// =====================
// Demo (IMPORTANT)
// =====================

// array destructuring
const [id1, id2] = ["b1", "b2"];

const catalog = new LibraryCatalog();

catalog.addItem(
  new Book({
    id: id1,
    title: "Clean Code",
    isbn: "978-0132350884",
    author: "Martin",
  })
);

catalog.addItem(
  new Book({
    id: id2,
    title: "JavaScript Basics",
    isbn: "123-456789",
    author: "John Doe",
  })
);

// register loan
catalog.registerLoan({ memberId: "m1", itemId: "b1" });

// describe book
console.log(catalog.items[0].describe());

// destructuring result
const { total, available } = catalog.snapshotStats();

console.log("Total:", total);
console.log("Available:", available);