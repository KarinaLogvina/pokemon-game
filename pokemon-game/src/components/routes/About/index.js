import { useHistory } from 'react-router';
import s from './about.module.css';

const AboutPage = () => {
    const history = useHistory();
    const handleClickButton = () => {
        history.push('/home')
    }

    return (
        <>
            <h2 className={s.root}>About this game</h2>
            <button onClick={handleClickButton}>Back</button>
        </>
    )
}

export default AboutPage;