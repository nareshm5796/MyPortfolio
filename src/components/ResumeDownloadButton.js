import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const ResumeDownloadButton = ({ link }) => {
  return (
    <Button
      href={link}
      target="_blank"
      variant="secondary"
      className="resume-download-button"
    >
      <FontAwesomeIcon icon={faDownload} className="me-2" />
      Download Resume
    </Button>
  );
};

export default ResumeDownloadButton;
