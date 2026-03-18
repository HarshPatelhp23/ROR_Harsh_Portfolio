import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Corelto Next Gen Pvt. Ltd</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              Developed a scalable Real Estate CRM platform that streamlined pre-sales and post-sales
              workflows. Built an automated Broker Settlement & Commission tool, managing commissions,
              billing, and reconciliations to eliminate manual financial tracking.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Software Engineer</h4>
                <h5>Atharva Systems</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built and maintained Rails applications, improving engagement and responsiveness by 20%.
              Optimized SQL queries, reducing average page load time by 30%. Integrated third-party
              APIs to enhance reliability and data synchronization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior ROR Developer</h4>
                <h5>VirtueInfo</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Developed RESTful APIs and increased test coverage by 40% using RSpec. Reduced
              production defects by 20% by implementing static code analysis using RuboCop and
              conducting structured code reviews.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
