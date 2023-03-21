import React, { useContext, useState } from 'react';
import './App.css'
import { BookList } from './components/BookList'
import { BookTypeList } from './components/BookTypeList'
import { RenderGate } from './components/RenderGate'
import { BooksContext } from './contexts/BooksContext'

const APP_TITLE = 'REEDTHEESBOOKS'

function App() {
  const { selectedGenre } = useContext(BooksContext)
  return (
    <div>
      <header>
        <h1>{APP_TITLE}</h1>
      </header>
      <main>
        <BookTypeList />
        <RenderGate renderIf={!!selectedGenre}>
          <section>
            <b>Selected genre - {selectedGenre}</b>
          </section>
          <BookList />
        </RenderGate>
      </main>
    </div>
  )
}

const AppWithContext = () => {
  const [selectedGenre, setSelectedGenre] = useState()
  return (
    <BooksContext.Provider value={{
      selectedGenre,
      setSelectedGenre
    }}>
      <App />
    </BooksContext.Provider>
  )
}

export default AppWithContext
