import { useHistory } from 'react-router-dom';

import s from './contact.module.css'

const ContactPage = () => {
    const history = useHistory();
    const handleClickButton = () => {
        history.push('/home')
    }

    return (
        <>
            <h2 className={s.root}>Contact us</h2>
            <button onClick={handleClickButton}>Back</button>
        </>
    )
}

export default ContactPage;