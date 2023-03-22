import { useState } from 'react';
import '../Square/styles.css';

export default function Square({value}){

    return (
        <button>
            {value}
        </button>   
    )
}