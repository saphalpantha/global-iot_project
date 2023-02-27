import classes from './Form.module.css'
import { Fragment } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Image from 'next/image';
import Portal from '../../UI/Model/PortalRoot';
import {GrFormClose} from "react-icons"
const Form = () => {

  const [showModel, setShowModel] = React.useState(false)





  const onClickHandler = () => {
    setShowModel(true)
  }


  const closeModelHandler = () => {
    setShowModel(false)
  }
  const helperForm = <Fragment>

  <form className={classes.model_form}>
    <div  className={classes.close_model} onClick={closeModelHandler}>
      <h1>X</h1>
    </div>
  <input className={classes.input} placeholder="Search for products" type='text'/>
</form>
  </Fragment> 

  return (

    <div>
      {showModel &&  <Portal className={classes.model}>{helperForm}</Portal>} 
    <form>

        <input onClick={onClickHandler} className={classes.input} placeholder="Search" type='text'/>
    </form>
    </div>
  )
}

export default Form