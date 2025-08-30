import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from './bookSlice';
import { nanoid } from 'nanoid';

const AddBook = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();

  const newBook = {
    id: nanoid(),
    title: title,
    author: author,
    price: Number(price),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(newBook));
    setAuthor('');
    setTitle('');
    setPrice('');
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col text-center items-center mt-4 gap-3"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="input "
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author Name"
          className="input"
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="input"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <div>
          <button type="submit" className="btn btn-primary">
            Add Button
          </button>
        </div>
      </form>
    </>
  );
};

export default AddBook;
