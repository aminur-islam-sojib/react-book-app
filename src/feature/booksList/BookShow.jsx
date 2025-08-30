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
    <>
      <ul className=" grid grid-cols-3 gap-1.5 p-5">
        {books && books.length > 0 ? (
          books.map((book) => (
            <div
              key={book.id}
              className="  p-5 bg-green-200  text-center rounded-xl"
            >
              {editingBook?.id === book.id ? (
                <EditBok book={book} onClose={() => setEditingBook(null)} />
              ) : (
                <li className=" text-xl font-medium">
                  {book.title} by {book.author} - $ {book.price}
                  <div className=" flex justify-center gap-2 mt-4">
                    <button
                      onClick={() => setEditingBook(book)}
                      className="btn btn-success  text-white ml-5"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="text-white btn btn-error"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              )}
            </div>
          ))
        ) : (
          <p>No books is here </p>
        )}
      </ul>
    </>
  );
};

export default BookShow;
