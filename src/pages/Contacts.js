import React from 'react';
import './Contact.css'
const Contacts = () => {
    const  handleSubmit=()=>{
        alert('Submited Thank You....')
    }
  return (
    <div class="container py-5">
        <h1 class="text-center text-warning mb-4">Contact Us</h1>
        <div class="row">
            <div class="col-md-6">
                <div class="contact-info">
                    <h2>Contact Information</h2>
                    <p><strong>Address:</strong> Hyderabad, India</p>
                    <p><strong>Email:</strong> mnaresh1057@gmail.com</p>
                    <p><strong>Phone:</strong> +91 7702064354</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="contact-form">
                    <h2>Get in Touch</h2>
                    <form>
                        <div class="form-group">
                            <label for="name">Your Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
                        </div>
                        <div class="form-group">
                            <label for="email">Your Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
                        </div>
                        <div class="form-group">
                            <label for="message">Write Your Message</label>
                            <textarea class="form-control" id="message" rows="2"
                                placeholder="Enter your message"></textarea>
                        </div>
                        <button type="submit" onClick={handleSubmit} class="btn btn-primary w-25">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Contacts;
