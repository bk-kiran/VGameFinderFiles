import React from 'react'

function Banner({gameBanner}) {
    const handleGoogleSearch = (gameName) => {
        const searchQuery = encodeURIComponent(`${gameName} game`);
        window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
    }
  return (
    <div className='md:-ml-0 md:mr-10 relative'>
        <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-950 to-transparent w-full'>
            <h2 className='text-[24px] text-white font-bold'>{gameBanner.name}</h2>
            <button className='mt-1 bg-blue-700 text-white px-2 p-1' onClick={() => handleGoogleSearch(gameBanner.name)}>Get Now</button>
        </div>
        
      <img src={gameBanner.background_image} className='md:h-[400px] w-full object-cover rounded-xl'/>

      <div className='absolute bottom-0 right-0 p-5'>
      <h2 className='text-[15px] text-white font-bold'>Released: {gameBanner.released}</h2>
        <h2 className='text-[15px] text-white font-bold'>Metacritic: {gameBanner.metacritic}/100</h2>
      </div>

    </div>
  )
}

export default Banner
