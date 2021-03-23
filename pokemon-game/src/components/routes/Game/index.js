import { useEffect, useState, useContext } from 'react';

import PokemonCard from '../../PokemonCard';

import s from './game.module.css'
import { FirebaseContext } from '../../context/firebaseContext';

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
    const firebase = useContext(FirebaseContext)

    useEffect(() => {
        firebase.getPokemonSoket((pokemons) => {
            setPokemons(pokemons)
        })
    }, [])

    const handleChangeActive = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = { ...item[1] };
                if (pokemon.id === id) {
                    pokemon.active = !pokemon.active
                }
                acc[item[0]] = pokemon;
                firebase.postPokemon(item[0], pokemon)
                return acc;
            }, {})
        });
    }

    const handleAddPokemon = () => {
        const data = DATA;
        firebase.addPokemon(data)
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