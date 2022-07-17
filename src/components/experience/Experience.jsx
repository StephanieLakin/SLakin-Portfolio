import React from "react";
import "./experience.scss";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="Experience">
      <h5>Experience & Skills</h5>
      <h2>Work Experience</h2>
      <div className="container experience_container">
        <div className="experience_front_end">
          <h3>Front End Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              {/* <small className="text-light">Experienced</small> */}
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>CSS / SCSS</h4>
              {/* <small className="text-light">Experienced</small> */}
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              {/* <small className="text-light">Experienced</small> */}
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>Javascript</h4>
              {/* <small className="text-light">Experienced</small> */}
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>Angular w/PrimeNG</h4>
              {/* <small className="text-light">Experienced</small> */}
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>React w/Material Ui</h4>
              {/* <small className="text-light">Experienced</small> */}
            </article>
          </div>
        </div>
        {/* end of front end */}
        <div className="experience_back_end">
          <h3>Back End Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>C#</h4>
              {/* <small className="text-light">Experienced</small> */}
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>.Net / .NET Core</h4>
              {/* <small className="text-light">Experienced</small> */}
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>Entity Framework</h4>
              {/* <small className="text-light">Experienced</small> */}
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>Rest API</h4>
              {/* <small className="text-light">Experienced</small> */}
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>Git / Azure DevOps</h4>
              {/* <small className="text-light">Experienced</small> */}
            </article>

            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>MS SQL Server</h4>
              {/* <small className="text-light">Experienced</small> */}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
