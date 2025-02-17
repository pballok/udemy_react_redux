import React, {createContext, useCallback, useState} from "react";
import { Book } from "../Book";
import axios from "axios";

type BooksContextType = {
    books: Book[];
    deleteBookById: (id: number) => Promise<void>;
    editBookById: (id: number, newTitle: string) => Promise<void>;
    createBook: (title: string) => Promise<void>;
    fetchBooks: () => Promise<void>;
}

const BooksContext = createContext<BooksContextType | null>(null);

export function Provider({ children } : { children: React.ReactNode }) {
    const [books, setBooks] = useState<Book[]>([]);

    const fetchBooks = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }, []);

    const deleteBookById = async (id: number) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book) => book.id !== id);
        setBooks(updatedBooks);
    }

    const editBookById = async (id: number, newTitle: string) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
        });
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data };
            }

            return book;
        });
        setBooks(updatedBooks);
    }

    const createBook = async (title: string) => {
        const response = await axios.post('http://localhost:3001/books', {
            title,
        });

        const updatedBooks = [
            ...books,
            response.data,
        ];
        setBooks(updatedBooks);
    }

    return (
        <BooksContext.Provider value={{
            books,
            deleteBookById,
            editBookById,
            createBook,
            fetchBooks,
        }}>
            {children}
        </BooksContext.Provider>
    )
}

export default BooksContext;
