import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export const SearchForm = (props) => {

    const [category, setCategory] = useState("people");
    const [id, setId] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = ( (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`)
        console.log('working?')
    })

    return (
        <div>
            <h3>Search by <span class="span">Planet</span> or <span class="span">Person</span> with an ID #: </h3>
            <form onSubmit={ (e) => handleSubmit(e)}>
                <select className="select" name="category" id="category" onChange={(e) => {
                    setCategory(e.target.value)}} value={category}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label className="label" htmlFor="id"> ID #: </label>
                <input className="input" type="number" id="id" name="id" onChange={(e) => {
                    setId(e.target.value)}} value={id}/>
                <button className="button" type="submit" value="search">Search</button>
            </form>
        </div>

    )
}