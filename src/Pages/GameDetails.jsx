import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from '../Services/GlobalApi'

function GameDetails() {
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    GlobalApi.getGameDetails(id).then((resp) => {
      setGameDetails(resp.data)
    });
  }, [id]);

  if (!gameDetails) return <div>Loading...</div>

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">{gameDetails.name}</h1>
      <img src={gameDetails.background_image}  className="w-full h-[400px] object-cover rounded-xl" />
    </div>
  );
}

export default GameDetails