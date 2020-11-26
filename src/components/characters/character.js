import React from 'react';
import CharacterCard from './characterCard/characterCard'


export default function characters(){

  return(
   <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            </div>
            </div>
          </div>
   </div>
  )
}