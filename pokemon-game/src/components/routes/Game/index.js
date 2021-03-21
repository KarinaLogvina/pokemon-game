import { useEffect, useState } from 'react';
import database from '../../services/firebase';

import PokemonCard from '../../PokemonCard';

import s from './game.module.css'

const GamePage = () => {
    const [allPokemons, setAllPokemons] = useState([]);

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setAllPokemons(snapshot.val())
        });
    })

    const writePokemonData = (newAllPokemons) => {
        database.ref('pokemons').set(newAllPokemons);
    }

    const setPokemonActive = (id) => {
        const newAllPokemons = allPokemons.map(item => item.id === id ? { ...item, isActive: !item.isActive } : item);
        setAllPokemons(newAllPokemons);
        writePokemonData(newAllPokemons);
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