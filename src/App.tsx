import { useState } from 'react'
import { Header } from './components/Header'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

import { GlobalStyle } from './styles/global'
import { HomeSection } from './components/HomeSection'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Header/>
      <HomeSection/> 
      
    </ThemeProvider>
    
  )
}
