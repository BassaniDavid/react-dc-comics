import { useState } from 'react'
import Header from './components/header.jsx'
import Main from './components/main.jsx'
import Footer from './components/footer.jsx'

const navLink = [
  'characters',
  'comics',
  'movies',
  'tv',
  'games',
  'collectibles',
  'videos',
  'fans',
  'news',
  'shop'
]

function App() {

  return (
    <>
      <Header link={navLink} />
      <Main />
      <Footer />
    </>
  )
}

export default App