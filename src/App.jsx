import { useState } from 'react'
import Header from './components/header.jsx'
import Main from './components/main.jsx'
import Footer from './components/footer.jsx'
import comics from './comics.js'

// dati header
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

// dati center footer
const footerLinkTitol = [
  'dc comics',
  'shop',
  'dc',
  'Sites'
]

const footerLink = [
  ['characters',
    'comics',
    'movies',
    'tv',
    'games',
    'collectibles',
    'videos',
    'fans',
    'news'
  ],
  ['Shop DC',
    'Shop DC Collectibles'
  ],
  ['Terms of use',
    'Privacy policy(new)',
    'As Choises',
    'Advertising',
    'Jobs',
    'Subscriptions',
    'Talent Workshops',
    'CPSC Certificates',
    'Ratings',
    'Shop Help',
    'Contact Us'
  ],
  ['DC',
    'MAD MAgazine',
    'DC Kids',
    'DC Universe',
    'DC power Visa'
  ]
]


// funzione
function App() {

  return (
    <>
      <Header link={navLink} />
      <Main dataComics={comics} />
      <Footer footerLinkTitol={footerLinkTitol} footerLink={footerLink} />
    </>
  )
}

export default App