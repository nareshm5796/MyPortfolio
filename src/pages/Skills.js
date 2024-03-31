import React from 'react';

const Skills = () => {
  return (
    <div class="container py-5">
  <h1 class="text-left text-warning mb-4">React Developer Skills</h1>
  <div class="row">
    <div class="col-md-6">
      <h2>Frontend Development</h2>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Redux</li>
        <li>Bootstrap</li>
        <li>Material-UI</li>
        <li>Responsive Design</li>
      </ul>
    </div>
    <div class="col-md-6">
      <h2>Tools & Technologies</h2>
      <ul>
        <li>Git & Version Control</li>
        <li>Webpack, Babel</li>
        <li>npm, Yarn</li>
        <li>Testing Frameworks (Jest, React Testing Library)</li>
        <li>Continuous Integration & Deployment (CI/CD)</li>
        <li>DevOps Basics</li>
      </ul>
    </div>
  </div>
  {/* <div class="row mt-4">
    
    <div class="col-md-6">
      <h2>Soft Skills</h2>
      <ul>
        <li>Problem Solving</li>
        <li>Communication</li>
        <li>Teamwork & Collaboration</li>
      </ul>
    </div>
  </div> */}
</div>

  );
}

export default Skills;
