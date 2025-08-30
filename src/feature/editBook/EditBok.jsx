import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editBook } from '../booksList/bookSlice';

const EditBok = ({ book, onClose }) => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [price, setPrice] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBook({ id: book.id, title, author, price: Number(price) }));
    onClose();
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
        <div className=" flex gap-2">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button onClick={onClose} type="button" className="btn btn-error">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default EditBok;
