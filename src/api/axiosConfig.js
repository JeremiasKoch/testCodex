import axios from 'axios'

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
})

export const fetchEpisodes = () => api.get('episode')
export const fetchEpisode = (id) => api.get(`episode/${id}`)
export const searchCharacters = (name) => api.get(`character/?name=${name}`)
export const fetchCharacter = (id) => api.get(`character/${id}`)

export default api
