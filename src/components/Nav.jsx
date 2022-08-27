import React from 'react';
import { FiMenu } from 'react-icons/fi';

const Nav = ({ breeds, breedIndex, openBreedMenu, clearBreed }) => {
  return (
    <div className='fixed z-10 top-0 left-0 bg-blue-500 w-full sm:px-5'>
      <div className='flex flex-row justify-between text-white'>
        <div className='flex-1 flex justify-start'>
          <button className='p-1 cursor-pointer' onClick={openBreedMenu}>
            <FiMenu size={30} />
          </button>
        </div>
        <div className='p-1 flex-1 flex justify-center items-center font-bold capitalize'>
          {breedIndex !== -1 ? breeds[breedIndex].name : 'Random'}
        </div>
        <div className='flex-1 flex justify-end items-center font-bold'>
          {breedIndex !== -1 ? (
            <button
              onClick={clearBreed}
              className='py-1 px-4 cursor-pointer rounded-full bg-blue-800 '
            >
              Clear
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Nav;
