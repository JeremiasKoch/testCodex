import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { searchCharacters } from '../api/axiosConfig'

const Header = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query) return
    try {
      const { data } = await searchCharacters(query)
      if (data.results.length > 0) {
        navigate(`/character/${data.results[0].id}`)
      }
    } catch (err) {
      console.error(err)
    }
    setQuery('')
  }

  return (
    <header className="p-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white flex flex-wrap items-center justify-between">
      <div className="flex items-center space-x-4 mb-2 sm:mb-0">
        <h1 className="text-xl font-bold">Rick and Morty</h1>
        <Link
          to="/"
          className="px-3 py-1 bg-blue-800 rounded hover:bg-blue-700"
        >
          Home
        </Link>
      </div>
      <form onSubmit={handleSearch} className="flex">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search character"
          className="px-2 py-1 rounded-l border border-gray-300 text-black"
        />
        <button
          type="submit"
          className="px-4 py-1 bg-blue-500 rounded-r text-white"
        >
          Search
        </button>
      </form>
    </header>
  )
}

export default Header
