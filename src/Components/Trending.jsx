import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

function Trending({trendingGames}) {
    const handleGoogleSearch = (gameName) => {
        const searchQuery = encodeURIComponent(`${gameName} game`);
        window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
    }

  return (
    <div className='mt-10 mr-10' >
        <h2 className='font-bold text-[30px] mb-5'>🔥 Trending Games</h2>
        <div className='hidden lg:grid grid-cols-4 gap-4'>
            {trendingGames.map((item, index) => index <4&&(
            <div className='dark:bg-gray-600 bg-gray-300 rounded-lg cursor-pointer relative overflow-hidden transform transition-transform hover:scale-105' onClick={() => handleGoogleSearch(item.name)}>
                <img src={item.background_image} className='h-[250px] rounded-lg object-cover'/>
                <h2 className='p-2 text-[15px] font-bold'>{item.name}</h2>
                <div className='flex items-center mt-1'>
                    <FaStar className='h-5 w-5 ml-2 dark:fill-yellow-200 fill-yellow-500 mr-2'/>
                    <h3 className='text-[13px] font-bold '>{item.rating}</h3>
                </div>
                <div className='flex items-center mt-3 mb-5'>
                    <FaCalendarAlt className='h-5 w-5 ml-2 dark:fill-red-400 fill-red-700 mr-2' />
                    <h3 className='text-[13px] font-bold '>{item.released}</h3>
                </div>
            </div>
      ))}
        </div>
    </div>

  )
}

export default Trending
