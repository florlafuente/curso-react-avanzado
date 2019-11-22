import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Error, Form, Input, Button, Title } from './styles'


export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ 
      email: email.value, 
      password: password.value 
    })
  }

  return (
    <>
      <Form onSubmit={handleSubmit} disabled={disabled}>
        <Title>{ title }</Title>
        <Input placeholder="Email"
          {...email}
          disabled={disabled} />
        <Input placeholder="Password"
          type="password"
          {...password}
          disabled={disabled} />
        <Button disabled={disabled}>{ title }</Button>
      </Form>
      { error && <Error>{ error }</Error> }
    </>
  )
}
