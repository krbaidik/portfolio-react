import React from "react";
import SocialLink from "./SocialLink";

const Contact = ({ data }) => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

  if (data) {
    // var contactName = data.name;
    var street = data.address.street;
    var city = data.address.city;
    // var state = data.address.state;
    // var zip = data.address.zip;
    var contact = data.phone;
    var contactEmail = data.email;
    var contactMessage = data.contactmessage;
  }

  // const submitForm = () => {
  //   window.open(
  //     `mailto:${contactEmail}?subject=${encodeURIComponent(
  //       subject
  //     )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
  //       email
  //     )}): ${encodeURIComponent(message)}`
  //   );
  // };

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

          <form action="#" method="post" className="php-email-form mt-4">
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="form-group mt-3">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>
      </section>
  );
};

export default Contact;
