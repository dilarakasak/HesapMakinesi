import React, { useState } from 'react'
import './Hesap.css';

function Hesap() {
    const [deger, setDeger] = useState('');

    const yaz = (value) => {
        setDeger((prevDeger) => prevDeger + value);
    }

    const hesapla = () => {
        setDeger(eval(deger).toString());
    }

    const temizle = () => {
        setDeger('');
    }

  return (
    <div className='arkaplan'>
        <div className='sonuc'>{deger}</div>

        <div className='satir'>
            <button className='button' onClick={() => yaz('7')}>7</button> 
            <button className='button' onClick={() => yaz('8')}>8</button> 
            <button className='button' onClick={() => yaz('9')}>9</button> 
            <button className='button isaret' onClick={() => yaz('/')}>/</button> 
        </div>
        
        <div className='satir'>
            <button className='button' onClick={() => yaz('4')}>4</button>
            <button className='button' onClick={() => yaz('5')}>5</button>
            <button className='button' onClick={() => yaz('6')}>6</button>
            <button className='button isaret' onClick={() => yaz('*')}>*</button>
        </div>
        
        <div className='satir'>
            <button className='button' onClick={() => yaz('1')}>1</button>
            <button className='button' onClick={() => yaz('2')}>2</button>
            <button className='button' onClick={() => yaz('3')}>3</button>
            <button className='button isaret' onClick={() => yaz('+')}>+</button>
        </div>
        
        <div className='satir'>
            <button className='button' onClick={() => yaz('0')}>0</button>
            <button className='button' onClick={() => yaz('.')}>.</button>
            <button className='button isaret' onClick={hesapla}>=</button>
            <button className='button isaret' onClick={() => yaz('-')}>-</button>
        </div>
        
        <button className='temizle' onClick={temizle}>TEMİZLE</button>
    </div>
  )
}

export default Hesap;