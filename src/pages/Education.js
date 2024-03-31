import React from 'react';

const Education = () => {
  return (
    <div class="container py-5">
        <h1 class="text-left text-warning mb-4">Education Background</h1>
        <div class="row">
            <div class="col-md-6">
                <div class="education-info">
                    <h3 className='text-success'>University Degree</h3 >
                    <p><strong>University Name:</strong> Osmania University</p>
                    <p><strong>Degree:</strong> Bachelor of Science in Computer Science</p>
                    <p><strong>Year of Graduation:</strong> 2021</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="education-info">
                    <h3 className='text-success'>School of Secondary Education</h3 >
                    <p><strong>College Name:</strong> MVS Government Junior College.</p>
                    <p><strong>Course Name:</strong> MPC</p>
                    <p><strong>Year Earned:</strong> 2018</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 pt-3">
                <div class="education-info">
                    <h3 className='text-success'>Online Courses</h3>
                    <p><strong>Course Name:</strong> Advanced Web Development with React</p>
                    <p><strong>Platform:</strong> Coursera</p>
                    <p><strong>Completion Date:</strong> October 2021</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Education;
