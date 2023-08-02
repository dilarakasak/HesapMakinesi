import React, { useState } from 'react'
import './Hesap.css';

function Hesap() {
  return (
    <div className='arkaplan'>
        <div className='sonuc'></div>

        <div className='satir'>
            <button className='button'>7</button> 
            <button className='button'>8</button> 
            <button className='button'>9</button> 
            <button className='button isaret'>/</button> 
        </div>
        
        <div className='satir'>
            <button className='button'>4</button>
            <button className='button'>5</button>
            <button className='button'>6</button>
            <button className='button isaret'>*</button>
        </div>
        
        <div className='satir'>
            <button className='button'>1</button>
            <button className='button'>2</button>
            <button className='button'>3</button>
            <button className='button isaret'>+</button>
        </div>
        
        <div className='satir'>
            <button className='button'>0</button>
            <button className='button'>,</button>
            <button className='button isaret'>=</button>
            <button className='button isaret'>-</button>
        </div>
        
        <button className='temizle'>TEMİZLE</button>
    </div>
  )
}

export default Hesap;