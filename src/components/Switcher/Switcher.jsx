import { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import useDarkSide from '../../hook/useDarkSide'

function Switcher() {
  const [colorTheme, setTheme] = useDarkSide()
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false
  )

  const toggleDarkMode = checked => {
    setTheme(colorTheme)
    setDarkSide(checked)
  }

  return (
    <>
      <div>
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={27}
        />
      </div>
    </>
  )
}

export default Switcher
