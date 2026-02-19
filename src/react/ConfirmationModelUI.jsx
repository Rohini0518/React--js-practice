import {useState} from "react";
import "../css/confiramtionModelUI.css";

function ConfirmationModal() {
  const [showModal, setShowModal] = useState(false)
  const [statusMsg, setStatusMsg] = useState("")

  const handleClick = (action) => {
    setShowModal(false)
    setStatusMsg(action?"Confirmed":"Cancelled")
  }

  return (
    <div className="modal-container">
      <button className="open-modal-btn" data-testid="open-modal-button" onClick={() => setShowModal(true)}>Open Confirmation Modal</button>

      {showModal && <div className="modal-backdrop" data-testid="confirmation-modal">
        <div className="modal-box" >
          <h2 className="modal-title" data-testid="modal-title">Confirm Action</h2>
          <p className="modal-message" data-testid="modal-message">Are you sure you want to proceed?</p>

          <div className="modal-buttons" >
            <button className="confirm-btn" data-testid="confirm-button" onClick={()=>handleClick(true)}>Confirm</button>
            <button className="cancel-btn" data-testid="cancel-button" onClick={()=>handleClick(false)}>Cancel</button>
          </div>
        </div>
      </div>}

      {!showModal && <div className="action-status" data-testid="action-status">{statusMsg}</div>}
    </div>
  );
}

export default ConfirmationModal;
