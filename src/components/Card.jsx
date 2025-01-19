const Card = ({
  title,
  footer,
  isFooterVisible,
  children,
  bg = 'bg-light',
}) => {
  return (
    <div className={`card ${bg} shadow-sm rounded-4 p-3`}>
      {title && <div className="card-header fw-bold">{title}</div>}
      <div className="card-body">{children}</div>
      {isFooterVisible && footer && (
        <div className="card-footer text-end">{footer}</div>
      )}
    </div>
  )
}

export default Card
