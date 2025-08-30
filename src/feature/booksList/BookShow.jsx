import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from './bookSlice';
import { useState } from 'react';
import EditBok from '../editBook/EditBok';

const BookShow = () => {
  const books = useSelector((state) => state.bookR.books);

  const [editingBook, setEditingBook] = useState(null);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <section>
      {books && books.length > 0 ? (
        <div className="books-grid">
          {books.map((book) => (
            <article key={book.id} className="book-item">
              {editingBook?.id === book.id ? (
                <EditBok book={book} onClose={() => setEditingBook(null)} />
              ) : (
                <>
                  <div>
                    <h3 className="book-title">{book.title}</h3>
                    <div className="book-meta">
                      {book.author} • ${book.price}
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => setEditingBook(book)}
                      className="btn btn-outline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      ) : (
        <p className="text-muted">No books available.</p>
      )}
    </section>
  );
};

export default BookShow;
