import { AppError } from "./errors/app-error";
import { Library } from "./models/library";
import { Book } from "./models/book";

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
        ))
        console.log(`${book1.title} has been added to the library.`);
        const book2 = library.add(new Book(
            "To Kill a Mockingbird",
            "Harper Lee",
            "J. B. Lippincott & Co.",
            1960,
            "9780060173227",
            "fiction",
            "English"
        ))
        console.log(`${book2.title} has been added to the library.`);
        const book3 = library.add(new Book(
            "A legnagyszerűbb könyv a nárcizmusról",
            "Bánki György",
            "Ab Ovo Kiadó",
            2016,
            "9786155353918",
            "non-fiction",
            "Hungarian"
        ))
        console.log(`${book3.title} has been added to the library.`);
    } catch(error) {
        if (error instanceof AppError) {
            console.error("AppError:", error.message);
        } else {
            console.error("Unexpected error:", error);
        }
    }
}