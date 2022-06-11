import React, { useEffect, useState } from 'react';
import CharacterCard from './components/Card';
import './App.css'

function App() {

  const [image, setImage] = useState({})
  const [image1, setImage1] = useState({})
  const [image2, setImag2] = useState({})
  const [image3, setImage3] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const datos = await response.json()
        console.log(datos.results)

        setImage({
          imgURL: datos.results[0].image,
          name: datos.results[0].name,
          gender: datos.results[0].gender,
          specie: datos.results[0].species,
          status: datos.results[0].status,
          location: datos.results[0].location.name,
          origin: datos.results[0].origin.name
        })

        setImage1({
          imgURL: datos.results[1].image,
          name: datos.results[1].name,
          gender: datos.results[1].gender,
          specie: datos.results[1].species,
          status: datos.results[1].status,
          location: datos.results[1].location.name,
          origin: datos.results[1].origin.name
        })

        setImag2({
          imgURL: datos.results[16].image,
          name: datos.results[16].name,
          gender: datos.results[16].gender,
          specie: datos.results[16].species,
          status: datos.results[16].status,
          location: datos.results[16].location.name,
          origin: datos.results[16].origin.name
        })

        setImage3({
          imgURL: datos.results[18].image,
          name: datos.results[18].name,
          gender: datos.results[18].gender,
          specie: datos.results[18].species,
          status: datos.results[18].status,
          location: datos.results[18].location.name,
          origin: datos.results[18].origin.name
        })
      } catch (error) {
        console.error('error bbsita');
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <div className='Card--cont'>
        <CharacterCard info={image} />
        <CharacterCard info={image1} />
        <CharacterCard info={image2} />
        <CharacterCard info={image3} />
      </div>
    </div>
  );
}

export default App;
