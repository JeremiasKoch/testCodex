import React, { useEffect, useState } from 'react'
import { fetchEpisodes } from '../api/axiosConfig'
import EpisodeCard from '../components/EpisodeCard'

const Dashboard = () => {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    const loadEpisodes = async () => {
      try {
        const { data } = await fetchEpisodes()
        setEpisodes(data.results)
      } catch (err) {
        console.error(err)
      }
    }
    loadEpisodes()
  }, [])

  return (
    <div className="p-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {episodes.map((ep) => (
        <EpisodeCard key={ep.id} episode={ep} />
      ))}
    </div>
  )
}

export default Dashboard
