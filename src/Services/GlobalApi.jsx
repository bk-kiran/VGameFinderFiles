import axios from "axios"


const key = ""

const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key='+key)
const getGamesList = axiosCreate.get('/games?key='+key)
const getGameListByGenreId = (id) => axiosCreate.get('/games?key='+key+'&genres='+id)

export default{
    getGenreList,
    getGamesList,
    getGameListByGenreId
}