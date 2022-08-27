import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { breeds } from '../src/data';
import Footer from './components/Footer';
import ImageBox from './components/ImageBox';
import Modal from './components/Modal';
import Nav from './components/Nav';

const App = () => {
  const [list, setList] = useState([]);
  const [breedIndex, setBreedIndex] = useState(-1);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  let url;
  if (breedIndex === -1) {
    url = 'https://dog.ceo/api/breeds/image/random/50';
  } else {
    url = `https://dog.ceo/api/breed/${breeds[breedIndex].name}/images/random/50`;
  }

  const fetchData = async (url) => {
    if (list.length > 490) return;
    try {
      setLoading(true);
      const res = await fetch(url);
      const responseData = await res.json();

      const arr = responseData.message.map((img) => {
        return { id: uuidv4(), image: img };
      });
      setList((prev) => [...prev, ...arr]);
      console.log(arr);
      console.log(list.length);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const openBreedMenu = () => {
    setModalOpen(true);
  };
  const closeBreedMenu = () => {
    setModalOpen(false);
  };
  const selectBreed = (id) => {
    setBreedIndex(id);
    setModalOpen(false);
    setList([]);
    fetchData(`https://dog.ceo/api/breed/${breeds[id].name}/images/random/50`);
    closeBreedMenu();
  };
  const clearBreed = () => {
    setBreedIndex(-1);
    setList([]);
    fetchData('https://dog.ceo/api/breeds/image/random/50');
  };

  return (
    <>
      <Modal
        breeds={breeds}
        modalOpen={modalOpen}
        breedIndex={breedIndex}
        selectBreed={selectBreed}
        closeBreedMenu={closeBreedMenu}
      />
      <Nav
        breeds={breeds}
        breedIndex={breedIndex}
        openBreedMenu={openBreedMenu}
        clearBreed={clearBreed}
      />
      <ImageBox list={list} />
      <Footer
        loading={loading}
        fetchData={fetchData}
        url={url}
        length={list.length}
      />
    </>
  );
};

export default App;
