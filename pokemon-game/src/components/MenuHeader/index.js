import { useState } from "react"
import Menu from "../Menu"
import Navbar from "../Navbar"

const MenuHeader = (bgActive) => {
    const [isActive, setMenu] = useState(null)

    const handleMenuClickButton = () => {
        setMenu(isActive => !isActive)
    }

    return (
        <>
            <Navbar onClickButton={handleMenuClickButton} bgActive={bgActive} isActive={isActive} />
            <Menu isActive={isActive} toggleMenu={handleMenuClickButton} />
        </>
    )
}

export default MenuHeader;