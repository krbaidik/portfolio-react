import React from "react";

const Portfolio = ({ data }) => {
  return (
      <section id="portfolio" className="portfolio">
        <div className="container">

          <div className="section-title">
            <h2>Portfolio</h2>
            <p>My Works</p>
          </div>
          <div className="row portfolio-container">
            { data.projects.map((project, index) => {
              return <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src={ '/images/portfolio/projects/' + project.image} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                    <div className="portfolio-links">
                      <a href={project.url} target="__blank" className="portfolio-lightbox" title={project.title}><i className="bx bx-link"></i></a>
                      <a href="/" title="Details" data-bs-toggle="modal" data-bs-target={'#detailModal'+index}><i className="bx bx-plus"></i></a>

                      <div className="modal fade" id={'detailModal'+index}  aria-labelledby={'#detailModal'+index+'label'} aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollabl">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1 className="modal-title" id={'detailModal'+index+'label'}>{project.title} Detail</h1>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              {project.details}
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      </div>
                  </div>
                </div>
              </div>
            })
            }
          </div>

        </div>
      </section>
  );
};

export default Portfolio;
