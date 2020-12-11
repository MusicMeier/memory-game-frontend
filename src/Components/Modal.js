// import React from 'react';
// import ReactDOM from 'react-dom'

// const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
//   <React.Fragment>
//     <div classname='modal-overlay'/>
//     <div className="modal-wrapper" aria-modal aria-hidden tableIndex={-1} role="dialog">
//       <div classname="modal">
//         <div className="modal-header">
//           <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
//             <span aria-hidden="true">&time;</span>
//           </button>
//         </div>
//         <p>Hello, I'm a modal.</p>
//       </div>
//     </div>
    
//   </React.Fragment>, document.body
// ) : null;

// export default Modal;

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          {/* <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button> */}
        </div>
        <h4 className="modal-message">
          Congratulations! <br></br>
          Your memory works! 🎉
        </h4>
        <div className="modal-button-1">
        <Link to="/">
          <button className="button-default">Go Home!</button>
        </Link>
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;