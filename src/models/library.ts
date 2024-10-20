import { Book } from "./book";
import { User } from "./user";

export class Library {
    books: Book[] = [];
    users: User[] = [];
    genres: string[] = ["fiction", "non-fiction", "novel", "sci-fi", "mytery", "fantasy", "children's literature", "science", "biography"];

    public nextId(): number {
        const ids =  this.books.map((book) => book.id);
        if (ids.length === 0) {
            return 1;
        }
        const maxId = Math.max(...ids);
        return maxId + 1;
    }

    public add(book: Book): Book {
        book.id = this.nextId();
        this.books.push(book);
        return book;
    }
}



