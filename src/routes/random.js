import React, { useState, useEffect } from 'react';
import CharacterCard from '../components/Card';
import '../App.css';

export const Random = () => {

  const [image, setImage] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const datos = await response.json();

        let randomNum = Math.floor(Math.random() * 19 + 0);

        setImage({
          imgURL: datos.results[randomNum].image,
          name: datos.results[randomNum].name,
          gender: datos.results[randomNum].gender,
          specie: datos.results[randomNum].species,
          status: datos.results[randomNum].status,
          location: datos.results[randomNum].location.name,
          origin: datos.results[randomNum].origin.name,
        });
      } catch (error) {
        console.error('error bbsita');
      }
    };

    fetchData();
  }, []);

  return (
    <div className='Card--cont'>
      <h1>Random Character</h1>
      <CharacterCard info={image} />
      <button
        id='update--btn'
        onClick={() => {
          const fetchData = async () => {
            try {
              const response = await fetch(
                'https://rickandmortyapi.com/api/character'
              );
              const datos = await response.json();

              let randomNum = Math.floor(Math.random() * 19 + 0);

              setImage({
                imgURL: datos.results[randomNum].image,
                name: datos.results[randomNum].name,
                gender: datos.results[randomNum].gender,
                specie: datos.results[randomNum].species,
                status: datos.results[randomNum].status,
                location: datos.results[randomNum].location.name,
                origin: datos.results[randomNum].origin.name,
              });
            } catch (error) {
              console.error('error bbsita');
            }
          };

          fetchData();
        }}>
        Update!
      </button>
    </div>
  );
};
