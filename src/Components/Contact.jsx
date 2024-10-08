import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    appointment: '',
    reason: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic 
    setFormSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h2>Contact Us And Schedule Your Visit</h2>
      {formSubmitted ? (
        <p className="success-message">Thank you for your message. We will get back to you soon!</p>
      ) : (
        <form
          action="https://formsubmit.co/mariadufna@email.com" 
          method="POST"
         
        >
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone Nr:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Appointment:
            <input
              type="datetime-local"
              name="appointment"
              value={formData.appointment}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Service:
            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
            >
              <option value="">Select a reason</option>
              <option value="general-inquiry">DNA Paternity Test</option>
              <option value="support">Tumor Genetics</option>
              <option value="feedback">Chemical Phatology</option>
              <option value="other">Histology and Cytology</option>
              <option value="other">Haematology</option>
              <option value="other">Serology</option>
              <option value="other">Ecutive Profilie</option>
              <option value="other">Infertility Profilie</option>
              <option value="other">Gynaecological scan</option>
              <option value="other">Abdominal Scan</option>
              <option value="other">Small Parts</option>
              <option value="other">urology</option>
              <option value="other">Breast Scan</option>
              <option value="other">Others Ultrasound</option>
            </select>
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}

      <div className="contact-info">
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <p>macrolab@lab.com</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <p>+0244 366 143 </p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <p>123 Street, City, Ghana</p>
        </div>
        <div className="contact-item">
          <p>Monday - Saturday</p>
          <p>7:30 AM - 5:30 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
