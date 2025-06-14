import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { fetchCharacter } from '../api/axiosConfig'

const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [character, setCharacter] = useState<any | null>(null)

  useEffect(() => {
    const loadCharacter = async () => {
      try {
        const { data } = await fetchCharacter(id)
        setCharacter(data)
      } catch (err) {
        console.error(err)
      }
    }
    loadCharacter()
  }, [id])

  if (!character) return <p>Loading...</p>

  return (
    <div className="p-4">
      <Link
        to="/"
        className="inline-block mb-4 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Home
      </Link>
      <h2 className="text-xl font-bold">{character.name}</h2>
      <img src={character.image} alt={character.name} className="my-4" />
      <p><strong>Status:</strong> {character.status}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
      <p><strong>Origin:</strong> {character.origin.name}</p>
      <p><strong>Location:</strong> {character.location.name}</p>
    </div>
  )
}

export default CharacterDetail
