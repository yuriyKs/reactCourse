import BookList from './components/bookList/BookList'
import BookForm from './components/bookForm/BookForm'
import Filter from './components/filter/Filter'
import Error from './components/error/Error'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1> Book Library app </h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <BookForm />
        </div>
        <div className="app-right-column">
          <Filter />
          <BookList />
        </div>
      </main>
      <Error />
    </div>
  )
}

export default App
