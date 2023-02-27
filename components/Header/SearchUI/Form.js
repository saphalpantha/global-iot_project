import classes from './Form.module.css'
import { Fragment } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Image from 'next/image';
import Portal from '../../UI/Model/PortalRoot';
const Form = () => {

  const [showModel, setShowModel] = React.useState(false)
  const [extend, setExtend] = React.useState(null)
  const [height, setHeight] = React.useState(60)
  const [enteredVal, setEnteredVal] = React.useState('')
  React.useEffect(() => {
    // SearchStyleHhandler()
    if(extend == true){
      setHeight(60)
    }
  },[extend])
  const onClickHandler = () => {
    setShowModel(true)
  }


  const closeModelHandler = () => {
    setShowModel(false)
  }


  const inputChangeHandler = (event) => {
    setEnteredVal(event.target.value)
    if(event.target.value.length >= 1){
      setExtend(true)
    }
    else{
      setExtend(prev => !prev)
    }
  }


  

  const helperForm = <Fragment>
    <div className={`${classes.model_container} ${extend ? classes.extend : ''}`} style={{height:height}}>

  <form className={classes.form_style}>
  { <input className={classes.input} onChange={inputChangeHandler}  placeholder="Search for products" type='text'/>}

    <div  className={classes.close_model} onClick={closeModelHandler}>
      <h1>X</h1>
    </div>
    <ul className={classes.ul}>
      <li>Performance Management</li>
      {extend && <hr/>}
      <li>Cybersecurity & Privacy</li>
      {extend && <hr/>}
      <li>Continuity & Resilience </li>
      {extend && <hr/>}
      <li>Risk Management</li>
      {extend && <hr/>}
      <li>Digital Transformation</li>
      {extend && <hr/>}
    </ul>
</form>
    </div>

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