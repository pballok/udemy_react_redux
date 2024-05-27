import { useState } from 'react';

import { Book } from './Book';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState<Book[]>([]);

    const deleteBookById = (id: number) => {
        const updatedBooks = books.filter((book) => book.id !== id);
        setBooks(updatedBooks);
    }

    const editBookById = (id: number, newTitle: string) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle };
            }

            return book;
        });
        setBooks(updatedBooks);
    }

    const handleCreateBook = (title: string) => {
        const updatedBooks = [
            ...books,
            {
                id: Math.round(Math.random() * 99999),
                title: title
            }
        ];
        setBooks(updatedBooks);
    }

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
            <BookCreate onCreate={handleCreateBook} />
        </div>
    );
}

export default App;
