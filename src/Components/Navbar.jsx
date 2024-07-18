import React, { useState, useEffect, useContext } from 'react'
import { FaSearch } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { ThemeContext } from '../Context/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom'

function Navbar() {

    const [toggle, setToggle]=useState(true)
    const {theme, setTheme}=useContext(ThemeContext)
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
        window.open(`https://www.igdb.com/search?utf8=%E2%9C%93&q=${searchValue}`, '_blank')
        setSearchValue('')
    }

    useEffect(()=> {
        console.log("Theme", theme)
    }, [])


  return (
    <div className='flex items-center p-3'>
        <div>
            <button className='dark:text-white bg-[#76a8f75e] text-black py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' onClick={() => window.open(`https://videogamerecommender-6cwohbvkgdnf3l29vvyvpj.streamlit.app/`, 'blank')}>Get Game Recommendations!</button>
        </div>
        <div className='flex bg-slate-200 p-2 w-[1050px] items-center mx-5 rounded-full'>
            <FaSearch/>
            <input type='text' placeholder='Search Games on IGDB.com! ' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="bg-transparent outline-none px-2 w-full"/>
            <button className=' text-black bg-green-500 py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' onClick={handleSearch}>Search</button>
            
        </div>
        <div>
            {theme=='light'? (<MdDarkMode className='text-[35px] ml-5 cursor-pointer' onClick={()=>{setTheme('dark'); localStorage.setItem('theme', 'dark')}}/>):<MdOutlineLightMode className='text-[35px] cursor-pointer fill-white' onClick={()=>{setTheme('light'); localStorage.setItem('theme', 'light')}}/>}
        </div>
    </div>
  )
}

export default Navbar
