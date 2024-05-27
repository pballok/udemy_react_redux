import React, {FormEvent, useState} from "react";
import {Book} from "../Book";

interface BookEditProps {
    book: Book,
    onSubmit: (newTitle: string) => void,
}

function BookEdit({ book, onSubmit }: BookEditProps) {
    const [title, setTitle] = useState(book.title);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(title);
    }

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button className="button is-primary">
                Save
            </button>
        </form>
    );
}

export default BookEdit;
