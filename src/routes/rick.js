import React, { useState, useEffect } from "react";
import CharacterCard from "../components/Card";
import '../App.css'

export const Rick = () => {

    const [image, setImage] = useState({})

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
            } catch (error) {
                console.error('error bbsita');
            }
        }

        fetchData()
    }, [])

    return (
        <div className='Card--cont'>
            <h1>I am Rick Sanchez</h1>
            <CharacterCard info={image} />
        </div>
    )
}