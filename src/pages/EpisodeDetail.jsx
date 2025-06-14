import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchEpisode } from '../api/axiosConfig'
import EpisodeCard from '../components/EpisodeCard'

const EpisodeDetail = () => {
  const { id } = useParams()
  const [episode, setEpisode] = useState(null)

  useEffect(() => {
    const loadEpisode = async () => {
      try {
        const { data } = await fetchEpisode(id)
        setEpisode(data)
      } catch (err) {
        console.error(err)
      }
    }
    loadEpisode()
  }, [id])

  if (!episode) return <p>Loading...</p>

  return (
    <div className="p-4">
      <EpisodeCard episode={episode} />
      <div className="mt-4">
        <p><strong>Air Date:</strong> {episode.air_date}</p>
        <p><strong>Created:</strong> {episode.created}</p>
        <p><strong>Characters:</strong></p>
        <ul className="list-disc pl-5">
          {episode.characters.map((charUrl) => {
            const charId = charUrl.split('/').pop()
            return (
              <li key={charUrl}>
                <Link className="text-blue-500 underline" to={`/character/${charId}`}>
                  Character {charId}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default EpisodeDetail
