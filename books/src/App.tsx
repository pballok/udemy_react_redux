import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import useBooksContext from './hooks/use-books-context';

import { useEffect } from 'react';

function App() {
    const { fetchBooks } = useBooksContext();

    useEffect(() => {
        fetchBooks().then();
    }, [fetchBooks]);

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    );
}

export default App;
