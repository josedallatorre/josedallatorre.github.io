import { MdWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import Image from 'next/image'
import { prefix } from "@/utils/prefix";

export default function Page() {
  return (
    <section id="resume">
      <p className="text-3xl font-bold">Here are my work experiences and education.</p>
      <div className="mt-6 flex flex-row">
        <MdWork size={45}/>
        <p className="m-4 text-lg font-bold">Work Experience</p>
      </div>
      <div className="border-l border-zinc-400 mt-4">
        <div className="ml-4 flex flex-row">
          <div className="basis-1/4">
            <Image
              src={`${prefix}/adl.jpg`}
              width={100}
              height={100}
              alt="ADL logo"
              className="rounded-full"
            />
          </div>
          <div className="basis-3/4">
            <p className="text-3xl font-bold">IoT Developer - Intern</p>
            <p className="text-lg text-zinc-200 font-bold">ADL Ingegneria Informatica</p>
            <p className="text-zinc-400 font-bold">April 2022 - June 2022</p>
          </div>
        </div>
        <div className="ml-6 mt-4">
          <ul className="list-disc">
            <li className="text-slate-100 font-bold">Designed and developed a IoT system capable of handling RFID based communication.
              Integrated with the architecture used by the company.
            </li>
            <li className="text-slate-100 font-bold">Integrated with the architecture used by the company.
            </li>
          </ul>
        </div>
      </div>


      <div className="mt-8 mb-4 flex flex-row">
        <FaGraduationCap size={50} />
        <p className="m-4 text-lg font-bold">Education</p>
      </div>

      <div className="border-l border-zinc-400 mt-4">
        <div className="ml-4 flex flex-row">
          <div className="basis-1/4">
            <Image
              src="/ulisboa.png"
              width={100}
              height={100}
              alt="University of Lisboa logo"
              className="rounded-full"
            />
          </div>
          <div className="basis-3/4">
            <p className="text-3xl font-bold">Visiting Student</p>
            <p className="text-lg text-zinc-200 font-bold">Faculty of Science, ULisboa</p>
            <p className="text-zinc-400 font-bold">September 2024 - February 2025</p>
          </div>
        </div>
        <div className="ml-6 mt-4">
          <ul className="list-disc">
          <li className="text-slate-100 font-bold">Relevant coursework: Software Reliability, Advanced Machine Learning and Advanced Databases</li>
          <li className="text-slate-100 font-bold">Grant by University of Udine and Erasmus+ study.</li>
          </ul>
        </div>
      </div>


      <div className="border-l border-zinc-400 mt-8">
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
            <p className="text-3xl font-bold">M.Sc. in Computer Science</p>
            <p className="text-lg text-zinc-200 font-bold">University of Udine</p>
            <p className="text-zinc-400 font-bold">March 2023 - Present</p>
          </div>
        </div>
        <div className="ml-4 mt-4">
          <p className="text-slate-100 font-bold">Relevant coursework: Software Engineering 2, Advanced object-oriented design and analysis, Recommender Systems, AI</p>
        </div>
      </div>

      <div className="border-l border-zinc-400 mt-8">
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
            <p className="text-3xl font-bold">B.Sc. in Computer Science</p>
            <p className="text-lg text-zinc-200 font-bold">University of Udine</p>
            <p className="text-zinc-400 font-bold">September 2019 - March 2023</p>
          </div>
        </div>
        <div className="ml-4 mt-4">
          <p className="text-slate-100 font-bold">Relevant coursework: Software Engineering, Computer Networks, Database Systems, User Interface Design, Algorithms and Data Structures</p>
        </div>
      </div>
    </section>
  );
}