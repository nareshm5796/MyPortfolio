import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'


import LinkedInIconButton from '../components/LinkedInIconButton.js';
import GithubIconButton from '../components/GithubIconButton.js';
import NaukriIconButton from '../components/NaukriIconButton.js';
import ResumeDownloadButton from '../components/ResumeDownloadButton.js';
const Home = () => {
  return (
    <div className="container py-5">
  <div className="row align-items-center justify-content-center">
    <div className="col-md-6 ">
      <h1 className="text-6xl font-bold">
        Hi There,
        <br />
        I'm <span className='text-warning'>Mudavath Naresh{" "}</span> 
      </h1>
      <p className="mt-4  text-xl">Highly skilled and innovative react.js developer with 2+
        years of hands-on experience in designing and
        implementing dynamic, user-friendly web applications.
        Proficient in leveraging the power of React.js to create
        interactive, responsive, and performant user interfaces.</p>
      <div className='pb-2'>
        <div className="mt-4 pt-4 social-btns">
          <ResumeDownloadButton link="https://drive.google.com/uc?id=18jxc7sSivWawG3QKKA3oSLOUHWRA-m5r" />
        </div>
      </div>
      <div className="mt-4 d-flex">
        <div className="social-btns me-2">
          <LinkedInIconButton link="https://www.linkedin.com/" />
        </div>
        <div className="social-btns me-2">
          <GithubIconButton link="https://github.com/nareshm5796" />
        </div>
        <div className="social-btns me2">
          <NaukriIconButton link="https://www.naukri.com/mnjuser/profile?id=&altresid" />
        </div>
        
      </div>
    </div>
    <div className="col-md-6 text-center mt-5 mt-md-0 image-container">
      <img
        alt="Jigar Sable"
        className="img-fluid"
        src="https://m.media-amazon.com/images/I/617W7HVWqTL.jpg"
      />
    </div>
  </div>
</div>

  );
}

export default Home;





