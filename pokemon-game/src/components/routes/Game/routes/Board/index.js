import { useContext, useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { PokemonContext } from '../../../../context/pokemonContext';
import PokemonCard from '../../../../PokemonCard';
import s from './style.module.css';

const BoardPage = () => {
    const [board, setBoard] = useState([]);
    const [player2, setPlayer2] = useState([])
    const { pokemon } = useContext(PokemonContext);

    // const history = useHistory();

    // if (Object.keys(pokemons).length === 0) {
    //     history.replace('/game')
    // }

    const handleClickBoardPlate = (position) => {

    }

    useEffect(async () => {
        const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const boardRequest = await boardResponse.json();
        setBoard(boardRequest.data);

        const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
        const player2Request = await player2Response.json();
        setPlayer2(player2Request.data);
    }, [])

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                {
                    Object.values(pokemon).map(({ id, name, img, minimize, type, values }) => (
                        <PokemonCard
                            className={s.card}
                            isActive={true}
                            name={name}
                            id={id}
                            img={img}
                            type={type}
                            values={values}
                            minimize
                            isActive
                        />
                    ))
                }
            </div>
            <div className={s.board}>
                {
                    board.map((item) => (
                        <div
                            key={item.position}
                            className={s.boardPlate}
                            onClick={() => item.card && handleClickBoardPlate(item.position)}
                        >
                            {
                                item.card && <PokemonCard {...item} minimize />
                            }
                        </div>

                    ))
                }
            </div>
            <div className={s.playerTwo}>
                {
                    player2.map(({ id, name, img, minimize, type, values }) => (
                        <PokemonCard
                            className={s.card}
                            isActive={true}
                            name={name}
                            id={id}
                            img={img}
                            type={type}
                            values={values}
                            minimize
                            isActive
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default BoardPage;