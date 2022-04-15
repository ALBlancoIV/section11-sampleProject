import React from 'react';
import ReactDom from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {props.children} </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment >
      {ReactDom.createPortal(<Backdrop onClick={props.onClick}/>, document.getElementById('overlays'))}
      {ReactDom.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, document.getElementById('overlays'))}
    </React.Fragment>
  );
};

export default Modal;
