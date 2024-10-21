import { AppError } from "../errors/app-error";
import { Book } from "./book";
import { User } from "./user";

export class Library {
    books: Book[] = [];
    users: User[] = [];
    genres: string[] = ["fiction", "non-fiction", "novel", "sci-fi", "mytery", "fantasy", "children's literature", "science", "biography"];

    public nextId(items: Book[] | User[]): number {
        const ids = items.map((item) => item.id);
        if (ids.length === 0) {
            return 1;
        }
        const maxId = Math.max(...ids);
        return maxId + 1;
    }

    public add(item: Book | User) {
        if (item instanceof Book) {
            item.id = this.nextId(this.books);
            this.books.push(item);
        } else if (item instanceof User) {
            item.id = this.nextId(this.users);
            this.users.push(item);
        };
        return item;
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

    public lend(bookTitle: string, userEmail: string): string {
        const bookToLend = this.books.find(book => book.title === bookTitle && book.availability);
        const userToLendTo = this.users.find(user => user.email === userEmail);
        if (bookToLend && userToLendTo) {
            userToLendTo.addToBorrowedBooks(bookToLend);
            bookToLend.availability = false;
            bookToLend.borrowedDate = new Date;
            bookToLend.borrower = userToLendTo;
            return `Book "${bookToLend.title} (${bookToLend.id})" has been lent to user "${userToLendTo.name} (${userToLendTo.email})"`
        } else if (!bookToLend) {
            throw new AppError(`A book with the title "${bookTitle}" is not available or was not found in the libraray database.`)
        } else if (!userToLendTo) {
            throw new AppError(`There is no such user in the library database: ${userEmail}`)
        } else {
            throw new AppError('Book could not be lent.')
        }
    }

    public return(bookId: number, userEmail: string) {

    }
}



