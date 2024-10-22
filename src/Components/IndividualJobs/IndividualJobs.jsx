import React from "react";
import "./individualJobs.css";

const IndividualJobs = ({ ...job }) => {
  const {
    id,
    company,
    logo,
    languages,
    location,
    contract,
    recent,
    featured,
    position,
    postedAt,
    tools,
    role,
    level,
  } = job;
  return (
    <div className="individualJob">
      <div className="left">
        <div className="image">
          <img src={logo} alt={company} />
        </div>
        <div className="aboutJob">
          <div className="aboutTop">
            <p className="companyName">{company}</p>
            {recent && <p className="new">New</p>}
            {featured && <p className="featured">Featured</p>}
          </div>
          <h2>{position}</h2>
          <div className="aboutBottom">
            <p>{postedAt}</p>
            <p>{contract}</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className="right">
        {role && <button>{role}</button>}
        {level && <button>{level}</button>}
        {languages.map((language) => (
          <button>{language}</button>
        ))}
        {tools.map((tool) => (
          <button>{tool}</button>
        ))}
      </div>
    </div>
  );
};

export default IndividualJobs;
