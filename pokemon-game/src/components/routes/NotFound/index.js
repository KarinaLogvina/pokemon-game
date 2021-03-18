import { useHistory } from 'react-router-dom';

import s from './notFound.module.css'


const NotFoundPage = () => {
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

export default NotFoundPage;