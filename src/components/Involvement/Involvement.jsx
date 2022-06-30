import React from 'react';
import './involvement.scss';

function Involvement() {
  return(
    <div className='involvement'>
      <img className='involvementImage' src={require('./image.png')} alt=''/>
      <div className='involvementText'>
        <link href='http://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css' />
        <h1>
          Stay Updated and Informed
        </h1>
        <p>
          It is important to be engaged with the community.
        </p>
        <button className='involvementButton'>
          GET INVOLVED
        </button>
      </div>
    </div>
  );
}

export default Involvement;