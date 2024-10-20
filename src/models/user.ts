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
}