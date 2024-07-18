import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

function GamesList({gameList, genreName}) {
    const handleGoogleSearch = (gameName) => {
        const searchQuery = encodeURIComponent(`${gameName} game`);
        window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
    }

  return (
    <div className='mr-10 mb-40 mt-10'>
        <h2 className='font-bold text-[30px] mb-5'>{genreName} Games</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-7'>
        {gameList.map((item)=> (
            <div className='bg-[#76a8f75e] p-3 rounded-lg h-full cursor-pointer relative overflow-hidden transform transition-transform hover:scale-105' onClick={() => handleGoogleSearch(item.name)}>
                <img src={item.background_image} className='w-[400px] h-[200px] rounded-xl'/>
                <h2 className='mb-1 text-[20px] font-bold'>{item.name}<span className='p-1 rounded-sm ml-2 text-[10px] dark:bg-red-200 dark:text-red-700 bg-red-700 text-red-200 font-medium'>{item.metacritic}</span></h2>
                <div className='flex items-center space-x-4 mb-1'>
                    <div className='flex items-center space-x-2'>
                        <FaStar className='dark:fill-yellow-200 fill-yellow-500'/>
                        <h3>{item.rating}</h3>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <FaComment className='dark:fill-blue-400 fill-blue-800'/>
                        <h3>{item.reviews_count}</h3>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <FaPlayCircle className='dark:fill-green-300 fill-green-700'/>
                        <h3>{item.playtime}</h3>
                    </div>
                </div>
            
            </div>
        ))}
        </div>
    </div>
  )
}

export default GamesList
