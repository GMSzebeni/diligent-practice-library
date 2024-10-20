import { User } from "./user";
import { Rating } from "../types/type";

export class Book {
    private _id: number;
    private _title: string;
    private _author: string;
    private _publisher: string;
    private _publicationYear: number;
    private _ISBN: number;
    private _availability: boolean;
    private _borrower: User | null;
    private _borrowedDate: Date | null;
    private _genre: string;
    private _rating: Rating | 0;
    private _reviews: string[];
    private _language: string;


	constructor(title: string, author: string, publisher: string, publicationYear: number, ISBN: number, 
                genre: string, language: string) {
        this._id = -1;
		this._title = title;
		this._author = author;
		this._publisher = publisher;
		this._publicationYear = publicationYear;
		this._ISBN = ISBN;
		this._availability = true;
		this._borrower = null;
		this._borrowedDate = null;
		this._genre = genre;
		this._rating = 0;
		this._reviews = [];
		this._language = language;
	}

    public get id(): number {
		return this._id;
	}

    public set id(value: number) {
        this._id = value;
    }
}