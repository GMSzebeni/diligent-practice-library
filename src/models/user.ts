import { Book } from "./book";
import { MembershipType } from "../types/type";

export class User {
    private _id: number;
    private _name: string;
    private _email: string;
    private _borrowedBooks: Book[]; //(array of books)
    private _readingList: number[]; //(array of book IDs)
    private _membershipType: MembershipType;
    private _joinedDate: Date;


	constructor(name: string, email: string, membershipType: MembershipType) {
		this._id = -1;
        this._name = name;
		this._email = email;
		this._borrowedBooks = [];
		this._readingList = [];
        this._membershipType = membershipType;
		this._joinedDate = new Date();
	}

    public get id(): number {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get email(): string {
        return this._email;
    }

	public get borrowedBooks(): Book[] {
		return this._borrowedBooks;
	}

	public set id(value: number) {
		this._id = value;
	}

	public addToBorrowedBooks(value: Book) {
        this._borrowedBooks.push(value);
    }
}