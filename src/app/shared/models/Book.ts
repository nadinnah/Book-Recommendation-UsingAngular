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
    dateOfPublish!:number;
}