import React from 'react'
import { Link } from 'react-router-dom'

const EpisodeCard = ({ episode }) => (
  <div className="border rounded p-4 bg-white shadow">
    <h2 className="font-bold text-lg">{episode.name}</h2>
    <p className="text-sm">{episode.episode} - {episode.air_date}</p>
    <Link
      to={`/episode/${episode.id}`}
      className="text-blue-500 underline mt-2 inline-block"
    >
      View Details
    </Link>
  </div>
)

export default EpisodeCard
