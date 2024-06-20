import React, { useEffect, useState } from "react";

import Header from "./Components/Header";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

import "./App.css";

const App = () => {
  const [resumeData, setResumeData] = useState({});

    useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
  }, []);

  const isEmpty = Object.keys(resumeData).length === 0;
  return (
    <div className="">
        { !isEmpty ? (
            (<div>
                <Header data={resumeData.main} />
                <About data={resumeData} />
                <Resume data={resumeData.resume} />
                <Portfolio data={resumeData.portfolio} />
                <Testimonials data={resumeData.testimonials} />
                <Contact data={resumeData.main} />
            </div>)
        ) : (
            <div>
            </div>
        ) }
    </div>
  );
};

export default App;
