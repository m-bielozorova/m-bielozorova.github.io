import React from 'react';

export default function Job({
  fromYear,
  fromMonth,
  toYear,
  toMonth,
  companyName,
  companyCity,
  position,
  responsibilities,
  achievements,
}) {
  return (
    <React.Fragment>
      <div className="date">
        <p className="end">{`${toMonth} ${toYear}`}</p>
        <span className="date-delimiter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <path d="M12 3l12 18h-24z" />
          </svg>
        </span>
        <p className="start">
          {fromMonth} <span>{fromYear}</span>
        </p>
      </div>
      <div className="info">
        <h3 className="item__title">{position}</h3>
        <div className="company">
          <span className="company__name">{companyName}</span>
          <span> - </span>
          <span className="company__location">{companyCity}</span>
        </div>
        <div className="achievements">
          <h3 className="achievements-title">Achievements:</h3>
          <ul className="achievements-list">
            {achievements.map((item, index) => (
              <li key={index} className="list__item">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="responsibilities">
          <h3 className="responsibilities-title">Responsibilities:</h3>
          <ul className="responsibilities-list">
            {responsibilities.map((item, index) => (
              <li key={index} className="list__item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
