import { useContext } from 'react';
import BooksContext from "../context/books";

function useBooksContext() {
    const context = useContext(BooksContext);
    if (context == null) {
        throw new Error('useBooksContext must be defined');
    }
    return context;
}

export default useBooksContext;
