import {Book} from "../Book";
import BookShow from "./BookShow";

interface BookListProps {
    books: Book[],
    onDelete: (id: number) => void,
    onEdit: (id: number, newTitle: string) => void,
}

function BookList({ books, onDelete, onEdit }: BookListProps) {
    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>;
    });

    return (
        <div className="book-list">
            {renderedBooks}
        </div>
    );
}

export default BookList;
