import React, { useState, useEffect } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

export const ListOfCategories = () => {
  // uso el hook setState para setear el estado con mochCategories como estado inicial
  const [categories, setCategories] = useState([])
  useEffect(function () {
    window.fetch('https://petgram-api-flor.now.sh/categories')
      .then(res => res.json())
      .then(res => {
        setCategories(res)
      }, []) // el array vacio se agrega para que se ejecute solo la primera vez que se renderiza el componente y no se haga un loop infinito
  })
  return (
    <List>
      { categories.map(category => <Item key={category.id}> <Category {...category} /> </Item>) }
    </List>
  )
}