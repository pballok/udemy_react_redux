import React, { useState } from "react";

interface Props {
    onCreate: (title: string) => void
}
function BookCreate({ onCreate } : Props) {
    const [title, setTitle] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        onCreate(title);
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
