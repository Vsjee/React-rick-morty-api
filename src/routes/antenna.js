import React, { useState, useEffect } from "react"
import CharacterCard from "../components/Card"

export const Antenna = () => {

    const [image, setImage] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character')
                const datos = await response.json()
                console.log(datos.results)

                setImage({
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
        <div className='Card--cont'>
            <h1>I am Antenna</h1>
            <CharacterCard info={image} />
        </div>
    )
}