import React from 'react';
import { Link } from 'react-router-dom';

import { dataInfo } from '../../info';

const { name, position } = dataInfo.first;

export default function Home() {
  return (
    <React.Fragment>
      <div
        id="home"
        style={{
          backgroundImage:
            'linear-gradient(62deg, #fff 0 50%, #48AFDE 0% 100%)',
          minHeight: '500px',
          maxHeight: '1200px',
          height: '100%',
          width: '100%',
        }}
      >
        <div className="container m-auto min-height-screen">
          <div className="grid grid-cols-12">
            <div className="bg-white flex flex-col justify-center col-span-12 md:col-span-5 md:bg-transparent">
              <div className="container m-auto">
                <div className="lg:pl-24 lg:min-w-[500px] sm:pl-10 pl-0 py-20 md:py-0 md:text-start text-center">
                  <p
                    className={`text-[#47AEDE] text-3xl md:text-base lg:text-2xl `}
                  >
                    Hi There!
                  </p>
                  <h1 className="text-[#223740] font-recoletaBlack text-5xl md:text-5xl lg:text-7xl xl:text-7xl mt-5 md:mt-3">
                    I'm {name}
                  </h1>
                  <h2
                    className={`text-[#223740] py-2 font-bold uppercase md:text-xl`}
                  >
                    {position}
                  </h2>
                  <a
                    href="/#experience"
                    className={`cursor-pointer inline-block bg-[#47AEDE] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 uppercase md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:bg-[#e9b200] hover:show-lg transform hover:translate-y-1 `}
                  >
                    Experience
                  </a>
                  <Link
                    to="/my-resume/#my-resume"
                    className={`ml-10 cursor-pointer inline-block bg-[#e9b200] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 uppercase md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:bg-[#47AEDE] hover:show-lg transform hover:translate-y-1 `}
                  >
                    My resume
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-12 pt-[50px] md:bg-transparent bg-[#D9EEF7] md:pt-[130px] md:col-span-7">
              <div className="container m-auto">
                <img
                  src="/images/portfolio.webp"
                  decoding="async"
                  alt="my profile foto"
                />
              </div>
            </div>
          </div>
          <div className="container m-auto absolute">
            <div className="px-3"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
