import { useState } from 'react';
import firebase from 'firebase/app';
import database from '../../services/firebase';

import PokemonCard from '../../PokemonCard';
import { POKEMON } from '../../../cardsInfo';

import s from './game.module.css'

const GamePage = () => {
    const pokemonCopy = JSON.parse(JSON.stringify(POKEMON));
    const [allPokemons, setAllPokemons] = useState(pokemonCopy);

    database.ref('pokemons').once('value', (snapshot) => {
        console.log(snapshot.val());
    })

    const writePokemonData = () => {
        console.log(allPokemons)
        firebase.database().ref('pokemons').set(allPokemons);
    }

    const setPokemonActive = (id) => {
        setAllPokemons(allPokemons => allPokemons.map(item => item.id === id ? { ...item, isActive: !item.isActive } : item));
        writePokemonData();
    }

    return (
        <>
            <div className={s.flex}>
                {
                    allPokemons.map((item, index) => <PokemonCard
                        isActive={item.isActive}
                        setPokemonActive={setPokemonActive}
                        name={item.name}
                        id={item.id}
                        img={item.img}
                        type={index.type}
                        values={item.values}
                        key={index}
                    />)
                }
            </div>
        </>
    )
}

export default GamePage;