import { MdWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";


export default function Page() {
    return(
      <section id="resume">
		<div className="container my-3">
			<h1 className="fw-bold">More of my credentials.</h1>
			<h3>Here are my work experiences and education.</h3>
			<div className="row resume-timeline">

				<div className="col-twelve resume-header">

					<h2>Work Experience</h2>

				</div> {/* /resume-header */}
              <MdWork />
							<div className="timeline-header">
								<h3>IoT Developer - Intern</h3>
								<p>April 2022 - June 2022</p>
							</div>

							<div className="timeline-content">
								<h4>ADL Ingegneria Informatica</h4>
								<p>Designed and developed a IoT system capable of handling RFID based communication.
											Integrated with the architecture used by the company. 
								</p>
							</div>


					<h2>Education</h2>

          <FaGraduationCap />
							<div className="timeline-header">
								<h3>Master Degree</h3>
								<p>March 2023 - Present</p>
							</div>

							<div className="timeline-content">
								<h4>University of Udine</h4>
								<p>Relevant coursework: Software Engineering 2, Advanced object-oriented design and analysis, Recommender Systems, AI</p>
							</div>

              <FaGraduationCap />
							<div className="timeline-header">
								<h3>Bachelor Degree</h3>
								<p>September 2019 - March 2023</p>
							</div>

							<div className="timeline-content">
								<h4>University of Udine</h4>
								<p>Relevant coursework: Software Engineering, Computer Networks, Database Systems, User Interface Design, Algorithms and Data Structures</p>
							</div>

              <FaGraduationCap />
							<div className="timeline-header">
								<h3>High School Diploma</h3>
								<p>September 2013 - July 2019</p>
							</div>

							<div className="timeline-content">
								<h4>ISIS Giuseppe Marchesini</h4>
								<p>I partecipated in projects with IT interest like AR development and economics and entrepreneurship focus.
									Received extra curricula credit as a student athlete. 
								</p>
							</div>

			</div>
		</div>
	</section>
	 

    );
  }