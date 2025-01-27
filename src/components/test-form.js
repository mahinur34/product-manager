
import { formAction } from '@/actions/test-action'
import React from 'react'

export const TestForm = () => {
  return (
    <form action={formAction}>
        <input type="text" name='firstName' placeholder='First Name'/>
        <input type="text" name='lastName' placeholder='Last Name'/>

        <button type='submit'>Submit</button>
    </form>
  )
}
