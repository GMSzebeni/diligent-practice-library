### diligent-practice-library

# Task: Modeling a Simple Online Library System
If you need help, here is the docs: https://www.typescriptlang.org/docs/handbook/utility-types.html

## Requirements:
Books: title, author, publisher, publicationYear, ISBN, availability, borrower (user object), borrowedDate, genre, rating (1-5 stars), reviews (array of strings), language.
Users: name, email, borrowedBooks (array of books), readingList (array of book IDs), membershipType (free, premium), joinedDate.
Library: books array, users array, genres (array of strings),
Methods:
Add book
Search for books (by title, author, ISBN, genre)
Lend book
Return book
Register user
List user's borrowed books
Recommend books based on user's reading history and genre preferences
Generate library statistics (most borrowed books, most popular genres, etc.)

## Types to use:
Record: Create a book record with many properties.
used it but differently - Partial: When adding a new book, not all fields are required.
done - Readonly: Make the book's ISBN read-only.
used it but differently - Pick: Display only the title and author of a book in a list.
Omit: Exclude the borrower-related information when listing all books.
Exclude: Filter books by genre from a union type representing all library items.
done - NonNullable: Ensure that a book's title is not null or undefined.
Parameters and ReturnType: Create a function to format book details as a string.
InstanceType: Create a Library class and use InstanceType to get its instance type.
ThisType: In a method that modifies a book, ensure this refers to a Library instance.
Mapped Types: Create a type that maps a string literal type to another type, for example, to map genres to an array of books.
Conditional Types: Create a type that checks if a given type is a subtype of another type.
Infer: Infer the type of a generic parameter based on the usage.
Template Literal Types: Create string literal types based on other types.
Indexed Access Types: Access properties of an object using a computed key.
Utility Types: Use ReadonlyArray, Partial, Required, and other utility types to create more complex types.

## Additional Features:
Reviews: Allow users to leave reviews for books.
Recommendations: Implement a recommendation system based on collaborative filtering or content-based filtering.
Hold requests: Allow users to place holds on unavailable books.
Notifications: Send email notifications for overdue books, new arrivals, and recommended books.

## Tips:
Classes: Use classes to represent Book and User.
Interfaces: Define interfaces to describe relationships between different entities.
Generic types: Use generic types if you want to handle multiple types of documents.