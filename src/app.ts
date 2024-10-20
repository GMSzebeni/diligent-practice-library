import { AppError } from "./errors/app-error";
import { Library } from "./models/library";
import { Book } from "./models/book";

export function createApp() {
    const library = new Library();

    try {
        const book = library.add(new Book(
            "Coding with Me",
            "Jim Smith",
            "Great Publisher Inc.",
            2020,
            123456789,
            "science",
            "Hungarian"
        ))
        console.log("The book has been added to the library: ", book);
    } catch(error) {
        if (error instanceof AppError) {
            console.error("AppError:", error.message);
        } else {
            console.error("Unexpected error:", error);
        }
    }
}