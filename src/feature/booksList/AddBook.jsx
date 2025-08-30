import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from './bookSlice';
import { nanoid } from 'nanoid';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');

  const dispatch = useDispatch();

  const newBook = {
    id: nanoid(),
    title: title,
    author: author,
    price: Number(price || 0),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(newBook));
    setAuthor('');
    setTitle('');
    setPrice('');
  };

  return (
    <section className="mb-6">
      <form onSubmit={handleSubmit} className="flex gap-3 flex-wrap items-end">
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          className="input input-bordered w-64"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          name="author"
          value={author}
          placeholder="Author Name"
          className="input input-bordered w-64"
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="number"
          name="price"
          value={price}
          placeholder="Price"
          className="input input-bordered w-32"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <div>
          <button type="submit" className="btn btn-primary">
            Add Book
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddBook;
