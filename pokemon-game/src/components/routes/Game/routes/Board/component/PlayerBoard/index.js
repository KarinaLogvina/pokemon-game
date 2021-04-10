import PokemonCard from '../../../../../../PokemonCard/index'

import s from './style.module.css'

const PlayerBoard = ({ cards }) => {
    return (
        <>
            {
                cards.map(({ id, name, img, minimize, type, values }) => (
                    <div className={s.card}>
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
                    </div>
                ))
            }
        </>
    )
}

export default PlayerBoard;