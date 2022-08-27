import React from 'react';
import { ImSpinner9 } from 'react-icons/im';

const Footer = ({ loading, fetchData, url, length }) => {
  return (
    <footer className='z-10 bottom-0 w-full h-[250px] bg-gradient-to-b from-transparent via-gray-200 to-white flex justify-center items-center'>
      {loading ? (
        <ImSpinner9 className='animate-spin text-blue-800/50' size={70} />
      ) : (
        <button
          onClick={() => {
            fetchData(url);
          }}
          className={`p-4 rounded-md text-xl text-white font-bold cursor-pointer ${
            length > 499 ? 'bg-gray-400' : 'bg-blue-600'
          }`}
        >
          {length > 499 ? 'Max limit reached' : 'Load More'}
        </button>
      )}
    </footer>
  );
};

export default Footer;
