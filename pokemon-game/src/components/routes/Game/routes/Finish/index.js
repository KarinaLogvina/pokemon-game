import { useContext } from 'react';
import PlayerBoard from '../Board/component/PlayerBoard'

import { PokemonContext } from '../../../../context/pokemonContext';


const FinishPage = () => {
    const { player1Pokemons,
        player2Pokemons, } = useContext(PokemonContext);
    console.log(player1Pokemons)

    return (
        <>
            <div>
                {
                    <PlayerBoard
                        cards={player1Pokemons}
                    />
                }
            </div>
            <button>END GAME</button>
        </>
    )
}

export default FinishPage;