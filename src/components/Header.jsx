import { useState } from "react";
import Navbar from './Navigation';
import '../styles/header.css';

export default function Header({name}){

    const firstLetter = name.charAt(0);
    const restOfString = name.slice(1);
    
    return (
        <header className="container d-inline-flex justify-content-sm-center justify-content-md-center justify-content-lg-start header mb-3">
            <h1><span>{firstLetter}</span>{restOfString}</h1>
        </header>
    )
}
