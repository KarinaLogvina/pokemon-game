import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PokemonContext } from '../../../../context/pokemonContext';
import PokemonCard from '../../../../PokemonCard/index';
import PlayerBoard from '../Board/component/PlayerBoard';
import s from './style.module.css';

const counterWin = (board, player1, player2) => {
    let player1Count = player1.length;
    let player2Count = player2.length;

    board.forEach(item => {
        if (item.card.possession === 'red') {
            player2Count++;
        }
        if (item.card.possession === 'blue') {
            player1Count++;
        }
    });

    return [player1Count, player2Count]
}

const BoardPage = () => {
    const { player1Pokemons,
        player2Pokemons,
        handleSelectedPokemonPlayer1,
        handleSelectedPokemonPlayer2 } = useContext(PokemonContext);

    const [board, setBoard] = useState([]);

    const [choiseCard, setChoiseCard] = useState(null);
    const [steps, setSteps] = useState(0);

    const handleClickBoardPlate = async (position) => {
        if (choiseCard) {
            const params = {
                position,
                card: choiseCard,
                board
            };

            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            const request = await res.json();

            if (choiseCard.player === 1) {
                handleSelectedPokemonPlayer1(prevState => prevState.filter(item => item.id !== choiseCard.id))
            }

            if (choiseCard.player === 2) {
                handleSelectedPokemonPlayer2(prevState => prevState.filter(item => item.id !== choiseCard.id))
            }

            setBoard(request.data)
            setSteps(prevState => {
                const count = prevState + 1;
                return count;
            })
        }
    }

    // useEffect(() => {
    //     if (steps === 9) {
    //         const [count1, count2] = counterWin(board, player1Pokemons, player2Pokemons)

    //         if (count1 > count2) {
    //             history.push('/game/finish')
    //         } else if (count1 < count2) {
    //             history.push('/game/finish')
    //         } else {
    //             history.push('/game/finish')
    //         }
    //     }
    // }, [steps]);

    useEffect(async () => {
        const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const boardRequest = await boardResponse.json();

        setBoard(boardRequest.data);

        const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
        const player2Request = await player2Response.json();

        player2Request.data.map((item) => {
            handleSelectedPokemonPlayer2(item.id, item)
        })
    }, []);

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                <PlayerBoard
                    player={1}
                    cards={player1Pokemons}
                    onClickCard={(card) => setChoiseCard(card)}
                />
            </div>
            <div className={s.board}>
                {
                    board.map((item) => (
                        <div
                            key={item.position}
                            className={s.boardPlate}
                            onClick={() => !item.card && handleClickBoardPlate(item.position)}
                        >
                            {
                                item.card && <PokemonCard {...item.card} isActive minimize />
                            }
                        </div>

                    ))
                }
            </div>
            <div className={s.playerTwo}>
                <PlayerBoard
                    player={2}
                    cards={player2Pokemons}
                    onClickCard={(card) => setChoiseCard(card)}
                />
            </div>
        </div>
    );
};

export default BoardPage;