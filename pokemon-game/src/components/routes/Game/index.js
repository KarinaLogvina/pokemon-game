import { useHistory } from 'react-router-dom';

const GamePage = () => {
    const history = useHistory();

    const handleClickButton = () => {
        history.push('/home')
    }

    return (
        <>
            <div>This is Gmae Page!</div>
            <button onClick={handleClickButton}>Back</button>
        </>
    )
}

export default GamePage;