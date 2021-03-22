import { useEffect, useState } from 'react';
import database from '../../services/firebase';

import PokemonCard from '../../PokemonCard';

import s from './game.module.css'

const DATA = {
    "abilities": [
        "keen-eye",
        "tangled-feet",
        "big-pecks"
    ],
    "base_experience": 122,
    "height": 11,
    "weight": 300,
    "id": 17,
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    "name": "pidgeotto",
    "stats": {
        "hp": 63,
        "attack": 60,
        "defense": 55,
        "special-attack": 50,
        "special-defense": 50,
        "speed": 71
    },
    "type": "normal",
    "values": {
        "top": 7,
        "right": 5,
        "bottom": 1,
        "left": 2
    }
}

const GamePage = () => {
    const [pokemons, setPokemons] = useState([]);

    const getPokemons = () => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val())
        });
    }

    useEffect(() => {
        getPokemons();
    }, [])

    const handleChangeActive = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = { ...item[1] };
                if (pokemon.id === id) {
                    pokemon.active = !pokemon.active
                }
                acc[item[0]] = pokemon;
                database.ref('pokemons/' + item[0]).set(pokemon)
                return acc;
            }, {})
        });
    }

    const handleAddPokemon = () => {
        const data = DATA;
        const newKey = database.ref().child('pokemons').push().key;
        database.ref('pokemons/' + newKey).set(data).then(() => getPokemons());
    }

    return (
        <>
            <div><button onClick={handleAddPokemon}>Create new pokemon</button></div>
            <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([key, { id, name, img, type, values, active }]) => <PokemonCard
                        isActive={active}
                        name={name}
                        id={id}
                        img={img}
                        type={type}
                        values={values}
                        key={key}
                        setPokemonActive={handleChangeActive}
                    />)
                }
            </div>
        </>
    )
}

export default GamePage;