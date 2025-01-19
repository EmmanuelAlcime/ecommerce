const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-header" onClick={() => handleToggle(index)}>
            <h5 className="mb-0">{item.title}</h5>
          </div>
          <div
            className={`accordion-body ${
              openIndex === index ? 'show' : 'collapse'
            }`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
