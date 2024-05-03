import React from 'react'

const SearchPlace = ({search, setSearch}) => {
  return (
    <form  className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input
        id="search" 
          type="text"
          role='search'
          placeholder='Search Items'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchPlace