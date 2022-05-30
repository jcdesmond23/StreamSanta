import * as React from 'react';
import logo from '../assets/senseifinal2.png'
import './Body.css'

export default function Body() {
  return (
    <div className='body'>
        <div className='container'>
            <h1 className='h1'>StreamSensei</h1>
            <img src={logo}></img>
        </div>
    </div>
  );
}