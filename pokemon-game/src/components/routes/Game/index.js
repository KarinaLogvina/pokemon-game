import { useState } from 'react';

import PokemonCard from '../../PokemonCard';
import { POKEMON } from '../../../cardsInfo';

import s from './game.module.css'

const GamePage = () => {
    const pokemonCopy = JSON.parse(JSON.stringify(POKEMON));

    const [allPokemons, setAllPokemons] = useState(pokemonCopy);
    const setPokemonActive = (id) => {
        const pokemonCopy = JSON.parse(JSON.stringify(allPokemons));
        const currentPokemon = pokemonCopy.find((a) => {
            return a.id === id;
        });
        currentPokemon.isActive = true;
        setAllPokemons(pokemonCopy);
    }

    return (
        <>
            <div className={s.flex}>
                {
                    allPokemons.map((item, index) => <PokemonCard isActive={item.isActive} setPokemonActive={setPokemonActive} name={item.name} id={item.id} img={item.img} type={index.type} values={item.values} key={index} />)
                }
            </div>
        </>
    )
}

export default GamePage;