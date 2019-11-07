import React from 'react'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import  { Logo } from './components/Logo'
import { GlobalStyles } from './styles/GlobalStyles'
import { Home } from './pages/Home'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)

  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyles />
      <Logo />
      {
        detailId
        ? <PhotoCardWithQuery  id={detailId}/>
        : <Home />
      }
      
    </>
  )
}