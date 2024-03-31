import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const LinkedInIconButton = ({ link }) => {
  return (
    <Button
      href={link}
      target="_blank"
      className="btn btn-outline-warning rounded-circle d-flex align-items-center justify-content-center border-2"
      style={{ width: '50px', height: '50px', backgroundColor: 'gray' }}
    >
      <FontAwesomeIcon icon={faLinkedin} size="2x" color='white' />
    </Button>
  );
};

export default LinkedInIconButton;
