import React from 'react'
import  { ListOfCategories } from './components/ListOfCategories'
import  { PhotoCard } from './components/PhotoCard'
import  { Logo } from './components/Logo'
import { GlobalStyles } from './GlobalStyles'

export const App = () => (
  <>
    <GlobalStyles />
    <Logo />
    <ListOfCategories />
    <PhotoCard />
  </>
)