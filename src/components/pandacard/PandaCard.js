import React from 'react';
import './PandaCard.scss';

const PandaCard = ({ name, photo, role, experience, description, contactInfo, specializations }) => {
  return (
    <div className="panda-card">
      <div className="panda-card-image">
        <img src={photo} alt={name} />
      </div>
      <div className="panda-card-details">
        <h3 className="panda-card-name">{name}</h3>
        <p className="panda-card-role">{role}</p>
        <p className="panda-card-experience">{experience}</p>
        <p className="panda-card-description">{description}</p>
        {specializations && (
          <div className="panda-card-specializations">
            <strong>Specializations:</strong>
            <ul>
              {specializations.map((specialization, index) => (
                <li key={index}>{specialization}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="panda-card-contact">
          <strong>Contact Information:</strong>
          <p>{contactInfo}</p>
        </div>
      </div>
    </div>
  );
}

export default PandaCard;
