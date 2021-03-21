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
        return Object.entries(allPokemons).reduce((acc, item) => {
            const pokemon = { ...item[1] };
            if (pokemon.id === id) {
                pokemon.isActive = true;
            };
            acc[item[0]] = pokemon;
            writePokemonData(acc);
            return acc;
        }, {});
    }

    const createPokemon = () => {
        const keyId = database.ref().child('polemons').push().key;
        database.ref('pokemons/' + keyId).update({ isActive: !keyId.isActive })
    }

    return (
        <>
            <div><button onClick={createPokemon}>Create new pokemon</button></div>
            <div className={s.flex}>
                {
                    Object.entries(allPokemons).map((item, index) => <PokemonCard
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