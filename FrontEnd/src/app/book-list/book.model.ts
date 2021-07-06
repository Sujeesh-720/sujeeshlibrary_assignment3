export class BookModel{
    constructor(
        public bookId: number,
        public bookName: string,
        public bookAuthor: string,
        public bookGenre: string,
        public description: string,
        public starRating: number,
        public imageUrl: string){} 
    
}