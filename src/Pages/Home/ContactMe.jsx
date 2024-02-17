import React, { useState } from "react";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validatePhoneNumber = () => {
    const phoneNumber = formData.phoneNumber.trim();
    if (!phoneNumber) {
      setPhoneNumberError("Phone Number is required");
      return false;
    }
    if (!/^\d{10}$/.test(phoneNumber)) {
      setPhoneNumberError("Invalid phone number, must be 10 digits");
      return false;
    }
    setPhoneNumberError("");
    return true;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validatePhoneNumber()) {
      return;
    }

    const formDataToSend = new FormData(event.target);
    formDataToSend.append("access_key", "770e5fa0-1106-46e5-ad4d-8e59c9ace339");

    const object = Object.fromEntries(formDataToSend);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      // Clear form fields upon successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: ""
      });
      setIsSubmitted(true); // Set form submission status to true
    }
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Let's connect and share our knowledge and experiences.
        </p>
      </div>
      {isSubmitted ? ( // Render success message if form is submitted
        <p className="success-message" style={{color:"#198754 ", fontFamily:'sans-serif', fontWeight:'600', fontSize:'32px'}}>Form submitted successfully! ✅ </p>
      ) : (
        <form className="contact--form--container" onSubmit={onSubmit}>
                 <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="first-name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="last-name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phoneNumber"
              id="phone-number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            {phoneNumberError && <span className="error" style={{ color: 'red' }}>{phoneNumberError}</span>}
          </label>
        </div>
        
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message..."
            required
          />
        </label>
       
        <div>
          <button className="btn btn-primary contact--form--btn" type="submit">Submit</button>
        </div>
        </form>
      )}
    </section>
  );
}
