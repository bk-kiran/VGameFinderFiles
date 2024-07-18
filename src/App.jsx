import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { ThemeContext } from './Context/ThemeContext'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme]=useState('light')
  useEffect(()=>{
    setTheme(localStorage.getItem('theme')?localStorage.getItem('theme'):'dark')
  }, [])

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={`${theme} ${theme === 'dark' ? 'bg-[#0E0E10]' : null} min-h-[100vh]`}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>

  )
}

export default App
