import React from 'react';

const Modal = ({
  breeds,
  modalOpen,
  breedIndex,
  selectBreed,
  closeBreedMenu,
}) => {
  return (
    <div className=''>
      <div
        className={`z-40 fixed left-0 p-2 w-full bg-white flex flex-row flex-wrap justify-center duration-200 ${
          modalOpen ? 'top-0' : 'top-[-100%]'
        }`}
      >
        {breeds.map(({ id, name }) => (
          <button
            onClick={() => selectBreed(id)}
            className={`py-1 px-2 m-1 rounded-full capitalize ${
              breedIndex === id
                ? 'text-white bg-blue-700'
                : 'text-black bg-white'
            }  border-2 border-blue-500`}
            key={id}
          >
            {name}
          </button>
        ))}
      </div>
      <div
        onClick={closeBreedMenu}
        className={`z-20 fixed top-0 left-0 h-full w-full bg-black/50 duration-200 ${
          modalOpen ? 'top-0' : 'top-[100%]'
        }`}
      ></div>
    </div>
  );
};

export default Modal;
