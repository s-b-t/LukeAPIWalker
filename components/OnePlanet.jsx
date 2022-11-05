import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {LoadingSpinner} from '../components/LoadingSpinner';
import axios from 'axios';

export const OnePlanet = (props) => {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [planet, setOnePlanet] = useState({});

    useEffect( () => {
        setIsLoading(true)
        setTimeout( () => {
            axios
            .get(`https://swapi.dev/api/planets/${id}/`)
            .then( (result) => {
                console.log(result.data);
                setOnePlanet(result.data);
            })
            .catch( (error) => {
                console.log(error);
            })
            .finally( () => {
                setIsLoading(false)
            })
        }, 1500)
    }, [id])

    return (
        <div className="flex-col align-items-center text-center">
            <h2>Familiar <span className="span">Planets</span> of Star Wars at Your Disposal!</h2>
                {
                    isLoading && <LoadingSpinner/>
                }
            <h2>{planet.name}</h2>
            <h3>Climate: {planet.climate}</h3>
            <h3>Terrain: {planet.terrain}</h3>
            <h3>Population: {planet.population}</h3>
            <h3>Orbital Period: {planet.orbital_period}</h3>
        </div>
    )
}