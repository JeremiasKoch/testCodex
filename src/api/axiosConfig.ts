import axios from 'axios'

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
})

export const fetchEpisodes = () => api.get('episode')
export const fetchEpisode = (id: string | number) => api.get(`episode/${id}`)
export const searchCharacters = (name: string) => api.get(`character/?name=${name}`)
export const fetchCharacter = (id: string | number) => api.get(`character/${id}`)

export default api
