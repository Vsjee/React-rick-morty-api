import React, { useState, useEffect } from 'react';
import CharacterCard from '../components/Card';
import '../App.css';

export const Morty = () => {

  const [image, setImage] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const datos = await response.json();

        setImage({
          imgURL: datos.results[1].image,
          name: datos.results[1].name,
          gender: datos.results[1].gender,
          specie: datos.results[1].species,
          status: datos.results[1].status,
          location: datos.results[1].location.name,
          origin: datos.results[1].origin.name,
        });
      } catch (error) {
        console.error('error bbsita');
      }
    };

    fetchData();
  }, []);

  return (
    <div className='Card--cont'>
      <h1>I am Morty Smith</h1>
      <CharacterCard info={image} />
    </div>
  );
};
