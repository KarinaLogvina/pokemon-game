import s from './navbar.module.css'
import cn from 'classnames'

const Navbar = ({ isActive, onClickButton }) => {
    const handleClickMenuButton = () => {
        onClickButton && onClickButton();
    }

    return (
        <nav className={s.root}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    POKEMON
                </p>
                <a onClick={handleClickMenuButton} className={cn(s.menuButton, { [s.active]: isActive })}>
                    <span />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;