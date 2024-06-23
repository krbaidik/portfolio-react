import React, { useRef, useState } from "react";
import SocialLink from "./SocialLink";
import emailjs from '@emailjs/browser';
const Contact = ({ data }) => {
    let street = data.address.street;
    let city = data.address.city;
    let contact = data.phone;
    let contactEmail = data.email;
    let contactMessage = data.contactmessage;


  const initialFormData = {
    from_name: '',
    user_email: '',
    message: ''
  };

  let btn = 'Send Message';
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [button, setButton] = useState(btn);
  const [smsSent, setSmsSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true)
    setButton('Sending..')
          emailjs
        .sendForm('service_u0p527t', 'template_lmdhsb4', form.current, {
             publicKey: 'VJ6zqiH91Sd0fDJye',
           })
           .then(
             () => {
               setFormData(initialFormData);
               setLoading(false)
               setSmsSent(true)
               setButton(btn)
             },
             (error) => {
                  setSmsSent(false)
               console.log('FAILED...', error.text);
             },
         );
  };

  return (
      <section id="contact" className="contact">
        <div className="container">

          <div className="section-title">
            <h2>Contact</h2>
            <p>{contactMessage}</p>
          </div>

          <div className="row mt-2">

            <div className="col-md-6 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-map"></i>
                <h3>My Address</h3>
                <p>{street}, {city}</p>
              </div>
            </div>

            <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-share-alt"></i>
                <h3>Social Profiles</h3>
                <div className="social-links">
                  <SocialLink props={data.social }/>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-envelope"></i>
                <h3>Email Address</h3>
                <p>{contactEmail}</p>
              </div>
            </div>
            <div className="col-md-6 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-phone-call"></i>
                <h3>Mobile</h3>
                <p>{contact}</p>
              </div>
            </div>
          </div>

          <form action="#" method="post" role={form} className="php-email-form mt-4" ref={form} onSubmit={sendEmail}>
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" name="from_name" value={formData.from_name} className="form-control" id="from_name" placeholder="Your Name" onChange={handleChange} required />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" value={formData.user_email} name="user_email" id="user_email" placeholder="Your Email" onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" value={formData.message} rows="5" placeholder="Message" onChange={handleChange} required></textarea>
            </div>
            <div className="text-center my-3"><button type="submit" disabled={loading}>
              {button}</button></div>
            <div>
              {smsSent ? (
                  <div className="alert alert-success alert-dismissible fade show py-2" role="alert">
                    <strong>Congrats!</strong> Your message has been sent. Thank you!
                    <button type="button" className="btn-close py-2" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
              ) : ''
              }
            </div>
          </form>
        </div>
      </section>
  );
};

export default Contact;
