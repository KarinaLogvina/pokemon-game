import { useState } from 'react';
import PokemonCard from '../../../../../../PokemonCard/index';
import cn from 'classnames'

import s from './style.module.css'

const PlayerBoard = ({ player, cards, onClickCard }) => {
    const [isSelected, setSelected] = useState(null);
    console.log(cards)

    const entries = Object.keys(cards).map((key) => {
        return cards[key]
    })

    return (
        <>
            {
                entries.map((item) => (
                    <div className={cn(s.cardBoard, {
                        [s.selected]: isSelected === item.id
                    })}
                        onClick={() => {
                            setSelected(item.id);
                            onClickCard && onClickCard({
                                player,
                                ...item,
                            })
                        }}
                        key={item.id}
                    >
                        <PokemonCard
                            isActive={true}
                            name={item.name}
                            id={item.id}
                            img={item.img}
                            type={item.type}
                            values={item.values}
                            minimize
                            isActive
                        />
                    </div>
                ))
            }
        </>
    )
}

export default PlayerBoard;