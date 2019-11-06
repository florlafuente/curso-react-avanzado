import React, { useState, useEffect, Fragment } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

export const ListOfCategories = () => {
  // uso el hook setState para setear el estado con mochCategories como estado inicial
  const [categories, setCategories] = useState([])

  const [showFixed, setShowFixed] = useState(false)
  useEffect(function () {
    window.fetch('https://petgram-api-flor.now.sh/categories')
      .then(res => res.json())
      .then(res => {
        setCategories(res)
      }, []) // el array vacio se agrega para que se ejecute solo la primera vez que se renderiza el componente y no se haga un loop infinito
  })

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed === true ? 'fixed' : ''}>
      { categories.map(category => <Item key={category.id}> <Category {...category} /> </Item>) }
     </List>
  )
  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}