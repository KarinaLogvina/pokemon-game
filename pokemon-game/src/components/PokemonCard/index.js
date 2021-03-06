import cn from 'classnames';
import s from './pokemonCard.module.css';

import CardBackSide from '../../assets/img/card-back-side.jpg';

const PokemonCard = ({ name, img, id, type, values, isActive, setPokemonActive }) => {
    const handleClick = () => {
        setPokemonActive(id);
    }

    return (
        <div className={s.root} onClick={handleClick}>
            <div className={cn(s.pokemonCard, { [s.active]: isActive })}>
                <div className={s.cardFront}>
                    <div className={`${s.wrap} ${s.front}`}>
                        <div className={`${s.pokemon} ${s[type]}`}>
                            <div className={s.values}>
                                <div className={`${s.count} ${s.top}`}>{values.top}</div>
                                <div className={`${s.count} ${s.right}`}>{values.right}</div>
                                <div className={`${s.count} ${s.bottom}`}>{values.bottom}</div>
                                <div className={`${s.count} ${s.left}`}>{values.left}</div>
                            </div>
                            <div className={s.imgContainer}>
                                <img src={img} alt={img} />
                            </div>
                            <div className={s.info}>
                                <span className={s.number}>#{id}</span>
                                <h3 className={s.name}>{name}</h3>
                                <small className={s.type}>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.cardBack}>
                    <div className={`${s.wrap} ${s.back}`}>
                        <img src={CardBackSide} alt="Сard Backside" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PokemonCard;