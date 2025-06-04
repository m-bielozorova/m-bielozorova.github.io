import React from 'react';
import { dataInfo } from '../../info';

const { name, secondName } = dataInfo.first;

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="bg-[#232323] relative print:hidden">
        <div className="py-4 flex flex-col justify-center mx-auto max-w-[200px]">
          <div className="text-center text-white">{`${name} ${secondName}`}</div>
          <div className="text-center text-white">
            {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
