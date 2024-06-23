import React from "react";

const About = ({ data }) => {
  if (data) {
    let data1 = data.main;
    var profilepic = "assets/img/" + data1.image;
    var bio = data1.bio;
    var street = data1.address.street;
    var city = data1.address.city;
    var phone = data1.phone;
    var email = data1.email;
    var website = data1.website;
    var degree = data1.degree;
    var occupation = data1.occupation;
    var interests = data1.interests;
  }

  return (
      <section id="about" className="about">

        <div className="about-me container">

          <div className="section-title">
            <h2>About</h2>
            <p>Learn more about me</p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src={profilepic} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>{occupation}</h3>
              <p className="">{bio}</p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>{website}</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{phone}</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>{street}, {city}</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{degree}</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{email}</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="counts container">

          <div className="row">

            <div className="col-lg-4 col-md-6">
              <div className="count-box">
                <i className="bi bi-emoji-smile"></i>
                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                <p>Happy Clients</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="bi bi-journal-richtext"></i>
                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                <p>Projects</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-headset"></i>
                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
                <p>Hours Of Support</p>
              </div>
            </div>
          </div>

        </div>

        {/*<div className="skills container">*/}

        {/*  <div className="section-title">*/}
        {/*    <h2>Skills</h2>*/}
        {/*  </div>*/}

        {/*  <div className="row skills-content">*/}

        {/*    {data.resume.skills.map((skill) => {*/}
        {/*      return (*/}
        {/*          <div className="col-lg-6">*/}
        {/*            <div className="progress">*/}
        {/*              <span className="skill">{skill.name} <i className="val">{skill.level}%</i></span>*/}
        {/*              <div className="progress-bar-wrap">*/}
        {/*                <div className="progress-bar" role="progressbar" aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100" style={{width:skill.level+'%'}}></div>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*      )*/}
        {/*    })}*/}
        {/*  </div>*/}

        {/*</div>*/}

        <div className="interests container">

          <div className="section-title">
            <h2>Skills</h2>
          </div>

          <div className="row">
            {data.resume.skills.map((skill) => {
              return (
                  <div className="col-lg-3 col-md-4 mb-3">
                    <div className="icon-box">
                      <i className={skill.icon+' '+skill.color}></i>
                      <h3>{skill.name}</h3>
                    </div>
                  </div>
              )
            })
            }
          </div>
        </div>

        <div className="interests container">

          <div className="section-title">
            <h2>Interests</h2>
          </div>

          <div className="row">
            {interests.map((interest) => {
              return (
                  <div className="col-lg-3 col-md-4">
                    <div className="icon-box">
                      <i className={interest.icon+' '+interest.color}></i>
                      <h3>{interest.title}</h3>
                    </div>
                  </div>
              )
            })
            }
          </div>
        </div>
      </section>
  );
};

export default About;
