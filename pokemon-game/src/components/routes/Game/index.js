import { Switch, Route, useRouteMatch } from 'react-router-dom';

import StartPage from './routes/Start/index';
import BoardPage from './routes/Board/index';
import FinishPage from './routes/Finish/index';

import { PokemonContext } from '../../context/pokemonContext';
import { useState } from 'react';


const GamePage = () => {
    const [selectedPokemons, setSelectedPokemons] = useState({});

    const match = useRouteMatch();


    const handleSelectedPokemon = (key, pokemon) => {
        setSelectedPokemons(prevState => {
            if (prevState[key]) {
                const copyState = { ...prevState }
                delete copyState[key]
                return copyState
            }
            return {
                ...prevState,
                [key]: pokemon,
            }
        })
    }

    return (
        <PokemonContext.Provider value={{
            pokemon: selectedPokemons,
            onSelected: handleSelectedPokemon,
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
