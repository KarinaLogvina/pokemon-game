import { useContext } from 'react';

import { PokemonContext } from '../../../../context/pokemonContext';


const FinishPage = () => {
    const { pokemon } = useContext(PokemonContext);
    console.log(pokemon)

    return (
        <>
            <div>
            </div>
            <button>END GAME</button>
        </>
    )
}

export default FinishPage;