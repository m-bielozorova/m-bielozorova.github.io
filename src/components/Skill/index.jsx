import React from 'react';

export default function Skill({ skill }) {
  return (
    <React.Fragment>
      <span className="icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.48225 19.8276L1.39736 12.7427C0.971713 12.3171 0.971713 11.6269 1.39736 11.2012L2.93879 9.65977C3.36444 9.23408 4.05462 9.23408 4.48027 9.65977L9.25298 14.4324L19.4756 4.20986C19.9013 3.78421 20.5914 3.78421 21.0171 4.20986L22.5585 5.75133C22.9842 6.17698 22.9842 6.86712 22.5585 7.29281L10.0237 19.8276C9.59803 20.2533 8.90789 20.2533 8.48225 19.8276V19.8276Z"
            fill="#fff"
          />
        </svg>
      </span>
      <span className="value">{skill}</span>
    </React.Fragment>
  );
}
