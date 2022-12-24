import React, {useState, useEffect} from 'react';
import rgbToHex from './utils';

const SingleColor = ({rgb, weight, index, hexColor}) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(",");
    const hexValue = `#${hexColor}`;
    useEffect(()=> {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 3000);
        return () => clearTimeout(timeout);
    }, [alert]) 
    return (
        <article className={`${index > 10 && 'text-white'} w-1/4 h-24`} style={{ backgroundColor: `rgb(${bcg})` }} 
        onClick={() => {
            setAlert(true);
            navigator.clipboard.writeText(hexValue);
        }} >
            <p className='ml-3 mt-2'>{weight}%</p>
            <p className='ml-3'>{hexValue}</p>
            {alert && <p className='uppercase text-[hsl(209, 61%, 16%)] ml-3'>copied to clipboard</p>}
        </article>
    )
}

export default SingleColor