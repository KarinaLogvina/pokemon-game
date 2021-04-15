import { Switch, Route, useRouteMatch } from 'react-router-dom';

import StartPage from './routes/Start/index';
import BoardPage from './routes/Board/index';
import FinishPage from './routes/Finish/index';

import { PokemonContext } from '../../context/pokemonContext';
import { useState } from 'react';


const GamePage = () => {
    const [player1Pokemons, setPlayer1Pokemons] = useState({});
    const [player2Pokemons, setPlayer2Pokemons] = useState({});

    const match = useRouteMatch();

    const handleSelectedPokemonPlayer1 = (key, pokemon) => {
        setPlayer1Pokemons(prevState => {
            if (prevState[key]) {
                const copyState = { ...prevState }
                delete copyState[key]
                return copyState
            }
            return {
                ...prevState,
                [key]: { ...pokemon, possession: 'blue' }
            }
        })
    }


    const handleSelectedPokemonPlayer2 = (key, pokemon) => {
        setPlayer2Pokemons(prevState => {
            if (prevState[key]) {
                const copyState = { ...prevState }
                delete copyState[key]
                return copyState
            }
            return {
                ...prevState,
                [key]: { ...pokemon, possession: 'red' }
            }
        })
    }

    return (
        <PokemonContext.Provider value={{
            player1Pokemons,
            player2Pokemons,
            handleSelectedPokemonPlayer1,
            handleSelectedPokemonPlayer2
        }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage;
