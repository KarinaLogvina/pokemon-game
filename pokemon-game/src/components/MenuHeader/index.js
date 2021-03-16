import { useState } from "react"
import Menu from "../Menu"
import Navbar from "../Navbar"

const MenuHeader = () => {
    const [isActive, setMenu] = useState(null)
    const handleMenuClickButton = () => {
        setMenu(isActive => !isActive)
    }

    return (
        <>
            <Navbar onClickButton={handleMenuClickButton} isActive={isActive} />
            <Menu isActive={isActive} />
        </>
    )
}

export default MenuHeader;