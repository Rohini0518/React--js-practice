import React from "react";
import "../css/confiramtionModelUI.css";

function ConfirmationModal() {
  return (
    <div className="modal-container">
      <button className="open-modal-btn">Open Confirmation Modal</button>

      <div className="modal-backdrop">
        <div className="modal-box">
          <h2 className="modal-title">Confirm Action</h2>
          <p className="modal-message">Are you sure you want to proceed?</p>

          <div className="modal-buttons">
            <button className="confirm-btn">Confirm</button>
            <button className="cancel-btn">Cancel</button>
          </div>
        </div>
      </div>

      <div className="action-status">Action status message here</div>
    </div>
  );
}

export default ConfirmationModal;
