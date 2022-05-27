import React, { useState } from 'react'
import Close from "../assets/images/icon-close.svg";
import Rules from "../assets/images/image-rules.svg";



const Footer = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <footer>
    {modal === true ? (
      <div className="modal-container">
        <div className="modal-box">
          <div className="modal__header">
            <h1>Rules</h1>
            <button onClick={toggle}>
              <img src={Close} alt="Close" />
            </button>
          </div>
            <img src={Rules} alt="Rules" />
          </div>
        </div>
    ) :
    ( <button onClick={toggle} className='rules'>Rules</button>)
    }
      
    </footer>
  )
}

export default Footer