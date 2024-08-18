import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import BookingForm from './components/BookingForm'
import Categories from './components/Categories'
import Meals from './components/Meals'

function App() {
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
    </>
  )
}

export default App
