import React from 'react';

export default function Education({ certification, company, year, city }) {
  return (
    <React.Fragment>
      <div>
        <span className="education__description">Certification | </span>
        {certification}
      </div>
      <div>
        <span className="education__name inline-flex text-[#77787b] font-extrabold">
          {company}
        </span>
        <span>: </span>
        <span className="location inline-flex items-baseline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#77787b"
          >
            <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
          </svg>
          <span className="text-[#77787b]">{city}</span>
          &nbsp;
        </span>
        <span className="education__year inline-flex items-baseline">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#77787b"
          >
            <path d="M24 21h-3l1-3h1l1 3zm-12.976-4.543l8.976-4.575v6.118c-1.007 2.041-5.607 3-8.5 3-3.175 0-7.389-.994-8.5-3v-6.614l8.024 5.071zm11.976.543h-1v-7.26l-10.923 5.568-11.077-7 12-5.308 11 6.231v7.769z" />
          </svg>
          &nbsp;
          <span className="text-[#77787b]">{year}</span>
        </span>
      </div>
    </React.Fragment>
  );
}
