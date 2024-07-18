import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

function GenreList({selectedGenreId, selectedGenreName}) {
  const [genreList, setGenreList] = useState([])

  const [activeBackground, setActiveBackground] = useState(0)

    useEffect(()=>{
        getGenreList()
    }, [])

    const getGenreList=()=> {
        GlobalApi.getGenreList.then((resp)=>{
            console.log(resp.data.results)
            setGenreList(resp.data.results)
        })
    }

  return (
    <div className='ml-5 mb-10'>
      <h2 className='text-[30px] font-bold mb-5'>Genres</h2>
      {genreList.map((item, index) => (
        <div onClick={() => {setActiveBackground(index); selectedGenreId(item.id); selectedGenreName(item.name)}} className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-4 group 
        ${activeBackground == index?'bg-gray-300': null}`}>
          <img src={item.image_background} className={`w-[45px] h-[45px] object-cover rounded-lg transform transition-transform duration-800 ease-out group-hover:scale-105
          ${activeBackground == index?'scale-105': null}`}/>
          <h3 className={`text-[20px] group-hover:font-bold
          ${activeBackground == index?'font-bold': null}`}>{item.name}</h3>
        </div>
      ))}

    </div>
  )
}

export default GenreList
