import { Book } from "../Book";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

import { useState } from "react";

interface BookShowProps {
    book: Book,
}

function BookShow({ book }: BookShowProps) {
    const [showEdit, setShowEdit] = useState(false);

    const { deleteBookById } = useBooksContext();

    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = (<h3>{book.title}</h3>);
    if (showEdit) {
        content = (<BookEdit book={book} onSubmit={handleSubmit}/>);
    }

    return (
        <div className="book-show">
            <img alt={book.title} src={`https://picsum.photos/seed/${book.id}/300/200`} />
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={() => setShowEdit(!showEdit)}>
                    Edit
                </button>
                <button className="delete" onClick={() => deleteBookById(book.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default BookShow;
