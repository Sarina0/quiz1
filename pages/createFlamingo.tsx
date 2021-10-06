import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import mongoose from 'mongoose';

export default function form()  {
    return (
<body>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <div>
           
                <h2>Create a Flamingo</h2>
            
            </div>
        <form >
            <label htmlFor="name"></label>
            <input id="name" type="text" placeholder="Name" />
            <label htmlFor="hair"></label>
            <input id="hair" type="text" placeholder="HairColour" />
            <label htmlFor="fav  food"></label>
            <input id="fav" type="text" placeholder="favourit food" />
            <button type="submit">Create</button>
            <br></br>
            <br></br>
            <input id="answer" type="text" />
            
           
        </form>
</body>
    )
}