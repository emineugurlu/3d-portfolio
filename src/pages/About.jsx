import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Emine
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Hi, I'm Emine Uğurlu a passionate frontend developer currently
          studying Computer Engineering at Isparta University of Applied
          Sciences. I love creating interactive and user-friendly web interfaces
          that blend design with functionality. I'm constantly learning new
          technologies like React.js, and I enjoy turning ideas into clean,
          responsive websites. I'm excited to keep growing, building, and
          collaborating on meaningful digital experiences.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20 ">
              <div className="btn-back rounded-xl">
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  ></img>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I'm constantly learning new technologies like React.js, and I enjoy
            turning ideas into clean, responsive websites. I'm excited to keep
            growing, building, and collaborating on meaningful digital
            experiences.
          </p>
        </div>
        <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((experince) => (
            <VerticalTimelineElement>
              <div>
                <h3 className='text-black text-xl font-poppins font-semibold'>
                  {experince.title}
                </h3>
                <p className='text-black-500 font-medium font-base'
                style={{margin:0}}>
                  {experince.company_name}
                </p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                {experince.points.map((point,index)=>(
                  <li>
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default About;
