import { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import PokemonCard from '../../../../PokemonCard';

import s from './style.module.css'
import { FirebaseContext } from '../../../../context/firebaseContext';
import { PokemonContext } from '../../../../context/pokemonContext';

const StartPage = () => {
    const [pokemons, setPokemons] = useState([]);
    const firebase = useContext(FirebaseContext);
    const pokemonContext = useContext(PokemonContext);
    const history = useHistory()

    useEffect(() => {
        firebase.getPokemonSoket((pokemons) => {
            setPokemons(pokemons)
        })

        return () => firebase.offPokemonSoket()
    }, [])

    const handleChangeSelected = (key) => {
        const pokemon = { ...pokemons[key] }
        pokemonContext.onSelected(key, pokemon);
        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected,
            }
        }))
    }

    const handleStartGame = () => {
        history.push('/game/board')
    }

    return (
        <>
            <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([key, { id, name, img, type, values, selected }]) =>
                        <PokemonCard
                            className={s.card}
                            isActive={true}
                            name={name}
                            id={id}
                            img={img}
                            type={type}
                            values={values}
                            key={key}
                            isSelected={selected}
                            setPokemonActive={() => {
                                if (Object.keys(pokemonContext.pokemons).length < 5 || selected) {
                                    handleChangeSelected(key)
                                }
                            }}
                        />)
                }
            </div>
            <div>
                <button
                    onClick={handleStartGame}
                    disabled={Object.keys(pokemonContext.pokemons).length < 5}
                >
                    Start</button>
            </div>
        </>
    )
}

export default StartPage;