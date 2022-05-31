import * as React from 'react';
import logo from '../assets/santa.png'
import './Body.css'

export default function Body() {
  return (
    <div className='body'>
        <div className='container'>
            <h1 className='h1'>StreamSanta</h1>
            <img src={logo} width="450" height="400"></img>
        </div>
    </div>
  );
}