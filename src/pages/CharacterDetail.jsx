import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCharacter } from '../api/axiosConfig'

const CharacterDetail = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)

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
