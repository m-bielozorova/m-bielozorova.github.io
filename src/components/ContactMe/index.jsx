import React from 'react';
import { dataInfo } from '../../info';

const { title, description } = dataInfo.contactMe;
const { github, linkedin, telegram } = dataInfo.first.socials;

export default function ContactMe() {
  return (
    <React.Fragment>
      <div
        id="contact-me"
        className="bg-[#eaf7fc] pt-[250px] pb-[100px] relative"
      >
        <div className="container m-auto">
          <p className="text-[240px] w-[80%] overflow-hidden absolute sm:leading-none lg:left-40 md:left-30 top-[-50px]  text-[#F7FBFD]">
            Contact me
          </p>
          <h1 className="relative font-extrabold text-5xl text-[#48AFDE] mb-5 -mt-40  md:px-24 px-5">
            {title}
          </h1>
          <h4 className="relative w-full font-[300] md:w-3/4 lg:w-2/3 xl:w-2/2 font-recoleta text-[#223740] text-2xl mb-20 px-5 md:px-24">
            {description}
          </h4>
          <div className="flex flex-col sm:flex-row sm:justify-between lg:flex-row  lg:justify-between sm:max-w-[500px] mx-auto relative">
            <a
              href={github.url}
              className="text-[#48AFDE] hover:text-[#e9b200] transition-colors duration-300 flex flex-col mb-4 sm:mb-0"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 496 512"
                className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-0 mt-0 sm:mb-5  lg:mb-0 lg:mx-3"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
              <span className="flex items-center justify-center">GitHub</span>
            </a>
            <a
              href={linkedin.url}
              className="text-[#48AFDE] hover:text-[#e9b200] transition-colors duration-300 flex flex-col mb-4 sm:mb-0"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="w-6 h-6 mx-auto sm:w-8 sm:h-8 mb-0 sm:mb-5 lg:mb-0 lg:mx-3"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
              <span className="flex items-center justify-center">Linkedin</span>
            </a>
            <a
              href={`mailto:${dataInfo.first.email}`}
              className="text-[#48AFDE] hover:text-[#e9b200] transition-colors duration-300 flex flex-col mb-4 sm:mb-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
                stroke="currentColor"
                fill="currentColor"
                className="w-6 h-6 sm:w-8 sm:h-8 mb-0 sm:mb-5 mx-auto lg:mb-0 sm:mx-0 lg:mx-3"
              >
                <path d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z"></path>
              </svg>
              <span className="flex items-center justify-center">Gmail</span>
            </a>
            <a
              href={telegram.url}
              className="text-[#48AFDE] hover:text-[#e9b200] transition-colors duration-300 flex flex-col mb-4 sm:mb-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="currentColor"
                className="w-6 h-6 sm:w-8 sm:h-8 mb-0 sm:mb-5 mx-auto lg:mb-0 sm:mx-0 lg:mx-3"
              >
                <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
              </svg>
              <span className="flex items-center justify-center">Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
