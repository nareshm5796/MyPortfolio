import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const GithubIconButton = ({ link }) => {
  return (
    <Button
      href={link}
      target="_blank"
      className="btn-outline-warning rounded-circle d-flex align-items-center justify-content-center border-2"
      style={{ width: '50px', height: '50px', backgroundColor: 'gray'  }}
    >
      <FontAwesomeIcon icon={faGithub} size="2x" color='white'  /> {/* Increase the size here */}
    </Button>
  );
};

export default GithubIconButton;
