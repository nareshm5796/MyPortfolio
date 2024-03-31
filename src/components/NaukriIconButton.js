import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import './naukri-icon-button.css'
const NaukriIconButton = ({ link }) => {
  return (
    <Button
      href={link}
      target="_blank"
      className="btn btn-outline-warning rounded-circle d-flex align-items-center justify-content-center naukri-icon-button border-2"
      style={{ width: '50px', height: '50px',backgroundColor: 'gray',transition: 'background-color 0.3s, transform 0.3s' }}
    >
      <FontAwesomeIcon icon={faBriefcase} size="lg"  color='white' /> {/* Using a briefcase icon as a placeholder */}
    </Button>
  );
};

export default NaukriIconButton;
