import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

interface Person  {
    name: string;
    hairColour: string;
    favouriteFood: string;
};

interface Props {
    data: Person[];
};

const Home = (props: Props) =>  {
    
  return (
    <div >
        {
            props.data.map(
                (object, index) => {
                    return (
                        <div key={ index }>
                            <p>{ object.name }</p>
                            <br />
                            <p>{ object.hairColour }</p>
                            <br />
                            <p>{ object.favouriteFood }</p>
                            
                            <div>
                            <form key={index}>
                                <label htmlFor="name"></label>
                                <input id="name" type="text" placeholder="Name" />
                                <label htmlFor="hair"></label>
                                <input id="hair" type="text" placeholder="HairColour" />
                                <label htmlFor="fav food"></label>
                                <input id="fav" type="text" placeholder="favourit food" />
                                <button type="submit">Create</button>
                                <input id="answer" type="text" />
                            </form>
                           
                            </div>
                        </div>
                      
                        
                    )
                }
            )
        }
    </div>
  )
}

export default Home;

export function getServerSideProps() {
    const data = [
        {
            name: 'Sarina',
            hairColour: 'black',
            favouriteFood: 'Chicken Pasta'
        },
        {
            name: 'Yoonseo',
            hairColour: 'black',
            favouriteFood: 'Fried Chicken'
        },
        {
            name: 'Harman',
            hairColour: 'black',
            favouriteFood: 'Fruit Loops'
        }
    ];

    return {
        props: {
            data
        }
    };
};