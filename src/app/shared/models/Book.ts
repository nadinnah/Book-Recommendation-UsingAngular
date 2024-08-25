export class Book{
  id!:number;
  name!:string;
  price!:number;
  tags?:string[];
  favorite:boolean = false;
  imageUrl!:string;
  description!:string;
  Author!:string;
  publisher!:string;
  dateOfPublish!: Date; // Change type to Date
}

export interface Reader {
  id: number;
  name: string;
  books: {
    book: Book;
    rating: number;
    status: string; // e.g., "Reading", "To Read", "Read"
  }[];}