import { AppError } from "./errors/app-error";
import { Library } from "./models/library";
import { Book } from "./models/book";

export function createApp() {
    const library = new Library();

    try {
        library.add(new Book(
            "Coding with Me",
            "Jim Smith",
            "Great Publisher Inc.",
            2020,
            123456789,
            "science",
            "Hungarian"
        ))
    } catch {
        throw new AppError("Book could not be added.")
    }
}