import React from "react";

const Resume = ({ data }) => {
  return (
      <section id="resume" className="resume">
          <div className="container">

              <div className="section-title">
                  <h2>Resume</h2>
                  <p>Check My Resume</p>
              </div>

              <div className="row">
                  <div className="col-lg-6">
                      <h3 className="resume-title">Sumary</h3>
                      <div className="resume-item pb-0">
                          <p>{data.skillmessage}</p>
                      </div>

                      <h3 className="resume-title">Education</h3>
                      {data.education.map((education) => {
                          return (
                              <div className="resume-item">
                                  <h4>{education.degree}</h4>
                                  <h5>{education.graduated}</h5>
                                  <p><em>{education.school}</em></p>
                                  <p>{education.description}</p>
                              </div>
                          )
                      })
                      }
                  </div>
                  <div className="col-lg-6">
                      <h3 className="resume-title">Professional Experience</h3>
                      {data.work.map((work) => {
                          return (
                                <div className="resume-item">
                          <h4>{work.title}</h4>
                          <h5>{work.years}</h5>
                          <p><em>{work.company}</em></p>
                          <p>
                              <ul>
                                  {work.description.map((desc) => {
                                      return (
                                          <li>{desc.text}</li>
                                      )
                                  })
                                  }
                              </ul>
                          </p>
                      </div>
                              )
                      })
                      }
                  </div>
              </div>

          </div>
      </section>
  );
};

export default Resume;
