import React from 'react';
import { Link } from 'react-router-dom';
import { dataInfo } from '../../info';
import Job from '../Job';
import './experience.css';

const { title, description, jobs } = dataInfo.experience;
const firstTwoJobs = jobs.slice(0, 2);

export default function Experience() {
  return (
    <React.Fragment>
      <div
        id="experience"
        className="pt-[250px] pb-[100px] relative "
        style={{
          backgroundImage:
            'linear-gradient(-62deg, #EEF7FB 0 50%,  white 0% 100%)',
          width: '100%',
        }}
      >
        <div className="container m-auto">
          <p className="text-[240px] w-[80%] overflow-hidden absolute lg:left-40 md:left-30 top-[-50px]  text-[#F7FBFD]">
            Experience
          </p>
          <h1 className="relative font-extrabold text-5xl text-[#48AFDE] mb-5 -mt-40  md:px-24 px-5">
            {title}
          </h1>
          <p className="relative w-full font-[300]  font-recoleta text-[#223740] text-2xl mb-10 px-5 md:px-24">
            {description}
          </p>

          <section className="experience relative flex flex-col lg:flex-row px-5 md:px-24">
            <ul className="experience__list">
              {firstTwoJobs.map((job, index) => (
                <li key={index} className="experience__list-item">
                  <Job {...job} />
                </li>
              ))}
            </ul>
          </section>
          <div className="px-5 md:px-24">
            <Link
              to="/my-resume/#my-resume"
              className={`cursor-pointer inline-block bg-[#e9b200] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 uppercase md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:bg-[#47AEDE] hover:show-lg transform hover:translate-y-1`}
            >
              View my full resume
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
