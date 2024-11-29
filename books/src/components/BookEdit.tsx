import {Book} from "../Book";
import useBooksContext from "../hooks/use-books-context";

import React, { useState } from "react";

interface BookEditProps {
    book: Book,
    onSubmit: () => void,
}

function BookEdit({ book, onSubmit }: BookEditProps) {
    const [title, setTitle] = useState(book.title);

    const { editBookById } = useBooksContext();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit();
        editBookById(book.id, title).then();
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
