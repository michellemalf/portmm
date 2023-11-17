import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [notification, setNotification] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_7kldahs',
        'template_2zyu3ix',
        {
          from_name: formData.name,
          to_name: 'Michelle',
          from_email: formData.email,
          to_email: 'michellemalfabon@gmail.com',
          message: formData.message,
        },
        'Y_OAQR2HtQzpLuAL3'
      )
      .then(
        () => {
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          setNotification('Thank you for your message!');
          setTimeout(() => {
            setNotification('');
          }, 3000);
        },
        (error) => {
          console.log(error, 'Fix Error!');
          setNotification('Error, try again');
          setTimeout(() => {
            setNotification('');
          }, 3000);
        }
      );
  };

  const handleCloseNotification = () => {
    setNotification('');
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Let's Connect</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      {notification && (
        <div className="notification-container">
          <p className="notification">{notification}<button className="close-button" onClick={handleCloseNotification}>
            X
          </button></p>
          
        </div>
      )}
    </section>
  );
};

export default Contact;
