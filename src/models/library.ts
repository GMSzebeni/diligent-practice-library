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

    public search(searchText: Partial<Pick<Book, 'title' | 'author' | 'ISBN' | 'genre'>>): Book[] {
        return this.books.filter(book => {
            return (
                (!searchText.title || book.title.toLowerCase().includes(searchText.title.toLowerCase())) &&
                (!searchText.author || book.author.toLowerCase().includes(searchText.author.toLowerCase())) &&
                (!searchText.ISBN || book.ISBN.toLowerCase().includes(searchText.ISBN.toLowerCase())) &&
                (!searchText.genre || book.genre.toLowerCase().includes(searchText.genre.toLowerCase()))
            )
        });
    }
}



