import React, {useState} from 'react'

const Header = (props) => {
  const [darkMode, setDarkMode] = useState(false)

  const handleClick = () => {
    setDarkMode(!darkMode)
  }

  return(
    <div className="Header">
      <h1>ReactHooks</h1>
      <button type={"button"} onClick={handleClick}>{darkMode? 'Dark' : 'Ligth'} mode</button>
    </div>
  )
}

export default Header