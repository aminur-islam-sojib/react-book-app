import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editBook } from '../booksList/bookSlice';

const EditBok = ({ book, onClose }) => {
  const [title, setTitle] = useState(book?.title || '');
  const [author, setAuthor] = useState(book?.author || '');
  const [price, setPrice] = useState(book?.price || '');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBook({ id: book.id, title, author, price: Number(price) }));
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 flex-wrap items-end">
      <input
        type="text"
        name="title"
        value={title}
        placeholder="Title"
        className="input input-bordered w-56"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        name="author"
        value={author}
        placeholder="Author Name"
        className="input input-bordered w-56"
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="number"
        name="price"
        value={price}
        placeholder="Price"
        className="input input-bordered w-28"
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <div className="flex gap-2">
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <button onClick={onClose} type="button" className="btn btn-outline">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditBok;
