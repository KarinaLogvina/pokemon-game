const GamePage = ({ onChangePage }) => {
    const handleClickButton = (page) => {
        onChangePage && onChangePage(page);
    }

    return (
        <>
            <div>This is Gmae Page!</div>
            <button onClick={handleClickButton}>Back</button>
        </>
    )
}

export default GamePage;