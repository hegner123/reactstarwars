import React from 'react';
import Characters from '../characters/character'
import './style.css'



export default function characterSelect(){

  return(
   <div className="container">
     <div className="row">
     <div className='col-12 col-md-8'>
    <Characters/>
    </div>
    <div className="col-2 placeholder">

        </div>
        <div className="col-2 placeholder">

        </div>
        </div>
   </div>
  )
}