import React, {useState, useEffect, useReducer} from 'react'

const initialState = {
  favorites: []
}

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state
  }
}

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState)

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }, [])

  const handleClick = (favorite) => {
    console.log(favorite)
    dispatch({
      type: 'ADD_TO_FAVORITE',
      payload: favorite,
    })
  }

  return (
    <div className={"Characters"}>

      {favorites.favorites.map(favorite => {
        return (
          <div key={favorite.id}>
            <h2>Favorites</h2>
            <li >
              {favorite.name}
            </li>
          </div>
        )
      })}

      {characters.map(character => (
        <div
          key={character.id}
          className={"item"}
        >
          <h2 >{character.name}</h2>
          <button
            type="button"
            onClick={() => handleClick(character)}
          >
            Agregar a favoritos
          </button>
        </div>
      ))}
    </div>
  )
}

export default Characters
