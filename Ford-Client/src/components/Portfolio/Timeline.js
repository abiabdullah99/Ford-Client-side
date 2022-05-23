import React from "react";
import "./Portfolio.css";
const Timeline = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-secondary mb-20 mt-20">
        My Services
      </h1>
      <div class="lg:w-7/12 w-10/12 mx-auto flex items-center justify-center">
        <div class="timeline w-10/12 relative before:bg-primary">
          <ul>
            <li className="before:bg-primary">
              <div class="timeline-content text-secondary shadow-md shadow-primary">
                <h1 className="my-4 text-primary">Web Development</h1>
                <p>
                  Web development is the building and maintenance of websites;
                  it's the work that happens behind the scenes to make a website
                  look great, work fast and perform well with a seamless user
                  experience.
                </p>
              </div>
            </li>
            <li className="before:bg-primary">
              <div class="timeline-content text-secondary  shadow-md shadow-primary">
                <h1 className="my-4 text-primary">Capture Code</h1>
                <p>
                  The Code Capture tool allows you easily create screenshots of
                  you LabVIEW code for use in documentation, web-sites, wikis,
                  emails.for creating well a GUI for easy capturing and use of
                  code
                </p>
              </div>
            </li>
            <li className="before:bg-primary">
              <div class="timeline-content text-secondary shadow-md shadow-primary">
                <h1 className="my-4 text-primary">Responsive Design</h1>
                <p>
                  Responsive Web design is the approach that suggests that
                  design and development should respond to the user's behavior
                  and environment based on screen size, platform and
                  orientation.
                </p>
              </div>
            </li>
            <li className="before:bg-primary">
              <div class="timeline-content text-secondary shadow-md shadow-primary">
                <h1 className="my-4 text-primary">Bug Fixing</h1>
                <p>
                  A bug fix is a change to a system or product designed to
                  programming bugs that create errors with system implementation
                  may require specific bug fixes that are successfully resolved
                  by a development or other IT team.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
