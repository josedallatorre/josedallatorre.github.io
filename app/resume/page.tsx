import { MdWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import Image from 'next/image'

export default function Page() {
  return (
    <section id="resume">
      <h1 className="fw-bold">More of my credentials.</h1>
      <h3>Here are my work experiences and education.</h3>
      <h2 className="mt-6 mb-4">Work Experience</h2>
      <MdWork />
      <div className="border-l border-sky-500">
        <div className="ml-4 flex flex-row">
          <div className="basis-1/4">
            <Image
              src="/adl.jpg"
              width={100}
              height={100}
              alt="University of Udine logo"
              className="rounded-full"
            />
          </div>
          <div className="basis-3/4">
          <h3>IoT Developer - Intern</h3>
          <h4>ADL Ingegneria Informatica</h4>
          <p>April 2022 - June 2022</p>
          </div>
        </div>
        <div className="ml-4">
          <p>Designed and developed a IoT system capable of handling RFID based communication.
            Integrated with the architecture used by the company.
          </p>
        </div>
      </div>


      <h2 className="mt-6 mb-4">Education</h2>

      <FaGraduationCap />
      <div className="border-l border-sky-500">
        <div className="ml-4 flex flex-row">
          <div className="basis-1/4">
            <Image
              src="/uniud.svg"
              width={100}
              height={100}
              alt="University of Udine logo"
              className="rounded-full"
            />
          </div>
          <div className="basis-3/4">
            <h3>Master Degree</h3>
            <h4>March 2023 - Present</h4>
            <p>University of Udine</p>
          </div>
        </div>
        <div className="ml-4">
          <p>Relevant coursework: Software Engineering 2, Advanced object-oriented design and analysis, Recommender Systems, AI</p>
        </div>
      </div>

      <FaGraduationCap />
      <div className="border-l border-sky-500">
        <div className="ml-4 flex flex-row">
          <div className="basis-1/4">
            <Image
              src="/uniud.svg"
              width={100}
              height={100}
              alt="University of Udine logo"
              className="rounded-full"
            />
          </div>
          <div className="basis-3/4">
            <h3>Bachelor Degree</h3>
            <h4>September 2019 - March 2023</h4>
            <p>University of Udine</p>
          </div>
        </div>
        <div className="ml-4">
          <p>Relevant coursework: Software Engineering, Computer Networks, Database Systems, User Interface Design, Algorithms and Data Structures</p>
        </div>
      </div>


      <FaGraduationCap />
      <div className="border-l border-sky-500">
        <div className="ml-4 flex flex-row">
          <div className="basis-1/4">
            <Image
              src="/uniud.svg"
              width={100}
              height={100}
              alt="University of Udine logo"
              className="rounded-full"
            />
          </div>
          <div className="basis-3/4">
            <h3>High School Diploma</h3>
            <h4>September 2013 - July 2019</h4>
            <p>ISIS Giuseppe Marchesini</p>
          </div>
        </div>
        <div className="ml-4">
          <p>I partecipated in projects with IT interest like AR development and economics and entrepreneurship focus.
            Received extra curricula credit as a student athlete.
          </p>
        </div>
      </div>
    </section>
  );
}