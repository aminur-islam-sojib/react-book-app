import './App.css';
import AddBook from './feature/booksList/AddBook';
import BookShow from './feature/booksList/BookShow';

function App() {
  return (
    <div className="container">
      <header className="app-header">
        <h1 className="app-title">Book Manager</h1>
        <div className="actions">
          <button className="btn btn-outline">Profile</button>
        </div>
      </header>

      <main className="app-main">
        <AddBook />
        <BookShow />
      </main>
    </div>
  );
}

export default App;
