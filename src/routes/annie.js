import React, { useState, useEffect } from "react";
import CharacterCard from "../components/Card";
import '../App.css'

export const Annie = () => {

  const [image, setImage] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const datos = await response.json()
        console.log(datos.results)

        setImage({
          imgURL: datos.results[16].image,
          name: datos.results[16].name,
          gender: datos.results[16].gender,
          specie: datos.results[16].species,
          status: datos.results[16].status,
          location: datos.results[16].location.name,
          origin: datos.results[16].origin.name
        })
      } catch (error) {
        console.error('error bbsita');
      }
    }

    fetchData()
  }, [])

  return (
    <div className='Card--cont'>
      <h1>I am Annie</h1>
      <CharacterCard info={image} />
    </div>
  )
}