import React, { useState, useEffect, useRef, Fragment } from 'react'
import { Article,ImgWrapper, Img, Button } from './styles'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0 , src = DEFAULT_IMAGE }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)
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
    <Button>
      { likes } likes!
    </Button>
      </Fragment>
    }
    </Article>
  )
}