import { AppError } from "./errors/app-error";
import { Library } from "./models/library";
import { Book } from "./models/book";
import { User } from "./models/user";

export function createApp() {
    const library = new Library();

    try {
        const book1 = library.add(new Book(
            "Coding with Me",
            "Jim Smith",
            "Great Publisher Inc.",
            2020,
            "123456789",
            "science",
            "Hungarian"
        ));
        console.log(`${(book1 as Book).title} has been added to the library.`);

        const book2 = library.add(new Book(
            "To Kill a Mockingbird",
            "Harper Lee",
            "J. B. Lippincott & Co.",
            1960,
            "9780060173227",
            "fiction",
            "English"
        ));
        console.log(`${(book2 as Book).title} has been added to the library.`);

        const book3 = library.add(new Book(
            "A legnagyszerűbb könyv a nárcizmusról",
            "Bánki György",
            "Ab Ovo Kiadó",
            2016,
            "9786155353918",
            "non-fiction",
            "Hungarian"
        ));
        console.log(`${(book3 as Book).title} has been added to the library.`);

        const booksFoundByTitle = library.search(
            {
                title: "nárcizmus"
            }
        );
        console.log(`Books found by title:\n${booksFoundByTitle.map(book => book.title).join(', ')}`);

        const booksFoundByISBN = library.search(
            {
                ISBN: "9780060173227"
            }
        );
        console.log(`Books found by ISBN:\n${booksFoundByISBN.map(book => book.title).join(', ')}`);

        const booksFoundByAuthor = library.search(
            {
                author: "i"
            }
        );
        console.log(`Books found by author:\n${booksFoundByAuthor.map(book => book.title).join(', ')}`);

        const user1 = library.add(new User(
            "Carol Dubbing",
            "carol@dubbing.com",
            "free"
        ));
        console.log(`${(user1 as User).name} (${(user1 as User).email}) has been added to the library.`);

        const user2 = library.add(new User(
            "Trevor Parsons",
            "trevor@parsons.com",
            "premium"
        ));
        console.log(`${(user2 as User).name} (${(user2 as User).email}) has been added to the library.`);

        console.log(library.lend("A legnagyszerűbb könyv a nárcizmusról", "trevor@parsons.com"));
    } catch(error) {
        if (error instanceof AppError) {
            console.error("AppError:", error.message);
        } else {
            console.error("Unexpected error:", error);
        }
    }
}