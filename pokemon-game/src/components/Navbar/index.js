import s from './navbar.module.css'
import cn from 'classnames'

const Navbar = ({ isActive, bgActive = false, onClickButton }) => {
    const handleClickMenuButton = () => {
        onClickButton && onClickButton();
    }

    return (
        <nav id={s.navbar} className={cn({
            [s.bgActive]: bgActive
        }, [s.root])}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    POKEMON
                </p>
                <i onClick={handleClickMenuButton} className={cn(s.menuButton, { [s.active]: isActive })}>
                    <span />
                </i>
            </div>
        </nav>
    )
}

export default Navbar;