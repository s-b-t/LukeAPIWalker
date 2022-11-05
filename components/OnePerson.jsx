import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {LoadingSpinner} from '../components/LoadingSpinner';
import axios from 'axios';

export const OnePerson = (props) => {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [person, setOnePerson] = useState({});

    useEffect( () => {
        setIsLoading(true)
        setTimeout( () => {
            axios
            .get(`https://swapi.dev/api/people/${id}/`)
            .then( (result) => {
                console.log(result.data);
                setOnePerson(result.data);
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
            <h2>Familiar <span className="span">Faces</span> of Star Wars at Your Disposal!</h2>
                {
                    isLoading && <LoadingSpinner/>
                }
            <h2>{person.name}</h2>
            <h3>Height: {person.height} cm</h3>
            <h3>Mass: {person.mass} kg</h3>
            <h3>Eye Color: {person.eye_color}</h3>
            <h3>Skin Color: {person.skin_color}</h3>
            <h3>Hair Color: {person.hair_color}</h3>
        </div>
    )
}