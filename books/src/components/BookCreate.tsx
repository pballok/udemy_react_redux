import useBooksContext from '../hooks/use-books-context';

import React, { useState } from "react";

function BookCreate() {
    const [title, setTitle] = useState("");

    const { createBook } = useBooksContext();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        createBook(title).then();
        setTitle("");
    }

    return (
        <div className={"book-create"}>
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button">Create!</button>
            </form>
        </div>
    );
}

export default BookCreate;
