import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Experts from './components/Experts'
import NewsLetter from './components/NewsLetter'
import Plans from './components/Plans'
import Course_data from './components/Course_data'
import Footer from './components/Footer'

function App() {
  const [plans, setPlans] = useState(Course_data);

  return (
    <>
      <Header/>
      <Banner/>
      <Experts/>
      <NewsLetter/>
      <Plans plans={plans}/>
      <Footer/>
    </>
  )
}

export default App
