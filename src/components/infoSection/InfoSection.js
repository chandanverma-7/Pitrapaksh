import React, { useState } from 'react'
import './InfoSection.scss'

function InfoSection(props) {

    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
      setExpanded(!expanded);
    };

  return (
    <div className="info-section">
      <h2>{props.heading}</h2>
      <p className={`info-text ${expanded ? 'expanded' : ''}`}>{props.info}</p>
      {!expanded && (
        <button className="read-more-button" onClick={toggleExpanded}>
          Read More
        </button>
      )}
      {expanded && (
        <button className="read-more-button" onClick={toggleExpanded}>
          Read Less
        </button>
      )}
    </div>
  )
}

export default InfoSection
