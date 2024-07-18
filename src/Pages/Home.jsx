import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../Components/Banner'
import Trending from '../Components/Trending'
import GamesList from '../Components/GamesList'


function Home() {
  const [gamesListByGenres, setGamesListByGenres] = useState([])

  const [gamesList, setGamesList] = useState()

  const [selectedGenreName, setSelectedGenreName] = useState('')

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0)

  useEffect(() => {
    getGames()
    getGamesListByGenresId(4)

    const intervalId = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % 20) 
    }, 5000)
  
    return () => clearInterval(intervalId) 
  }, [])




useEffect(() => {
  if (gamesList && gamesList.length > 0) {
    setCurrentBannerIndex(0) // Reset the banner index when the games list is updated
  }
}, [gamesList])

  const getGames = () => {
    GlobalApi.getGamesList.then((resp)=> {
      console.log(resp.data.results)
      setGamesList(resp.data.results)
    }
  )}

  const getGamesListByGenresId = (genreId) => {
    GlobalApi.getGameListByGenreId(genreId).then((resp)=> {
      console.log(resp.data.results)
      setGamesListByGenres(resp.data.results)
    })
  }

  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 dark:text-white text-black'>
        <div className='ml-5 md:ml-0 hidden md:block md:col-span-1 mr-10'>
            <GenreList selectedGenreId={(genreId)=>getGamesListByGenresId(genreId)} selectedGenreName={(genreName) => setSelectedGenreName(genreName)}/>
        </div>
        <div className='col-span-1 md:col-span-3'>
          {gamesList?.length>0&&gamesListByGenres.length>0?
          <div>
            <Banner gameBanner={gamesList[currentBannerIndex % gamesList.length]} />
            <Trending trendingGames={gamesList}/>
            <GamesList gameList={gamesListByGenres} genreName={selectedGenreName}/>
          </div>
          :null}
        </div>
    </div>
  )
}

export default Home
