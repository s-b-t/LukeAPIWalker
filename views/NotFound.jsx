import React from 'react';
import RedneckStormTrooper from './StormTrooperRedneck.jpeg'

export const NotFound = (props) => {
    return  <div className="flex-col align-items-center text-center">
                <h2>I BET THIS AIN'T WHATCHU WAS LOOKIN' FOR, NOW WAS IT?!</h2>
                <img src={RedneckStormTrooper} alt="redneck-stormtrooper" />
            </div>
            
}