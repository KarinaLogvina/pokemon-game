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
    }, [])

    const setPokemonActive = (key) => {
        return database.ref('pokemons/' + key).update(
            { isActive: !allPokemons[key].active }
        )
            .then(() => {
                allPokemons[key].active = !allPokemons[key].active
            })
    }

    const createPokemon = () => {
        const keyId = database.ref().child('polemons').push().key;
        database.ref('pokemons/' + keyId).update({ isActive: !keyId.active })
    }

    return (
        <>
            <div><button onClick={createPokemon}>Create new pokemon</button></div>
            <div className={s.flex}>
                {
                    Object.entries(allPokemons).map(([key, { id, name, img, type, values, active }]) => <PokemonCard
                        isActive={active}
                        name={name}
                        id={id}
                        img={img}
                        type={type}
                        values={values}
                        key={key}
                        setPokemonActive={() => setPokemonActive(key)}
                    />)
                }
            </div>
        </>
    )
}

export default GamePage;