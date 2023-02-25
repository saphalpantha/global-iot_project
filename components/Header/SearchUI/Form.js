import React from 'react'
import Model from '../../UI/Model/Model'
import classes from './Form.module.css'
const Form = () => {
  const focusHandler = () => {
    return <Model><h1>hello world</h1></Model>
  }
  return (
    <form>
        <input onFocus={focusHandler} className={classes.input} placeholder="Search" type='text'/>
    </form>
  )
}

export default Form