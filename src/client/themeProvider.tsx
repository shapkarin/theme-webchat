import React, { createContext, useState } from 'react'

type Theme = 'nerd' | 'girl' | 'other';

export const ThemeContext = createContext([])

export const ThemeProvider = ({ childern }) => {
  const [theme, setTheme] = useState<Theme>('nerd')

  return (
    <ThemeContext.Provider value={[ theme, setTheme ]}>
      {{ childern }}
    </ThemeContext.Provider>
  )
}