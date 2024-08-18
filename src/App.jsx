import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import BookingForm from './components/BookingForm'
import Categories from './components/Categories'
import Meals from './components/Meals'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
	  <Hero />
	  <Categories />
	  <div className="container">
	  	<hr />
	  </div>
	  <Meals />
	  <BookingForm />
	  <Footer />
    </>
  )
}

export default App
