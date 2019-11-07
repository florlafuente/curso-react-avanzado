import React, { useState, useEffect, useRef, Fragment } from 'react'
import { Article,ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

function useLocalStorage (key, initialValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (e) {
      console.error(e)
    }
  }

  return [storedValue, setLocalStorage]
}

export const PhotoCard = ({ id, likes = 0 , src = DEFAULT_IMAGE }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== undefined
      ? window.IntersectionObserver
      : import('intersection-observer')
    )
      .then(() => {
        const observer = new window.IntersectionObserver(function(entries){
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
         })
         observer.observe(element.current)
      })
    
  }, [element])

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
    {
      show && 
      <Fragment>
        <a href={`/detail/${id}`}>
          <ImgWrapper>
            <Img src={src} />
          </ImgWrapper>
        </a>
        <Button onClick={() => setLiked(!liked)}>
          <Icon size='32px' /> {likes} likes!
        </Button>
      </Fragment>
    }
    </Article>
  )
}