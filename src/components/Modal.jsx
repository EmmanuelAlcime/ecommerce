const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content p-4 rounded">
        <div className="d-flex justify-content-between">
          <h5>{title}</h5>
          <button onClick={onClose} className="btn-close"></button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}

export default Modal
