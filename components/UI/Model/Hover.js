import ReactDOM from 'react-dom';
import classes from './Hover.module.css'
const Portal = (props) => {

   const portalRoot = typeof document !== 'undefined' ? document.getElementById('mymodel') : null;

  return portalRoot ? (
    ReactDOM.createPortal(
      <>
        <div className={`${classes.model} ${props.className}`}>
          {props.children}
        </div>
      </>,
      portalRoot
    )
  ) : null;
};

export default Portal;
