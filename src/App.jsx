import './App.css';
import AddBook from './feature/booksList/AddBook';
import BookShow from './feature/booksList/BookShow';

function App() {
  return (
    <>
      <h1 className=" text-3xl font-bold text-center mt-2">List of books </h1>
      <AddBook />
      <BookShow />
    </>
  );
}

export default App;
