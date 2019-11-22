import React, { useState } from 'react'

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue)
  const onChange = e => setValue(e.target.value)

  return {
    value,
    onChange
  }
}

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  return (
    <form onSubmit={onSubmit}>
      <input placeholder="Email"
        {...email} />
      <input placeholder="Password"
        type="password"
        {...password} />
      <button>Iniciar sesión</button>
    </form>
  )
}
