import {useState} from "react";

import {Book} from "../Book";
import BookEdit from "./BookEdit";

interface BookShowProps {
    book: Book,
    onDelete: (id: number) => void,
    onEdit: (id: number, newTitle: string) => void,
}

function BookShow({ book, onDelete, onEdit }: BookShowProps) {
    const [showEdit, setShowEdit] = useState(false);

    const handleSubmit = (newTitle: string) => {
        onEdit(book.id, newTitle);
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
                <button className="delete" onClick={() => onDelete(book.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default BookShow;
