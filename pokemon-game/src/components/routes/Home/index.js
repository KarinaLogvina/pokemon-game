import Footer from '../../Footer/';
import Header from '../../Header';
import Layout from '../../Layout';
import PokemonCard from '../../PokemonCard';
import { POKEMON } from '../../../cardsInfo';
import { useHistory } from 'react-router-dom';

import bg from '../../../assets/img/bg.jpg';
import s from './home.module.css';
import MenuHeader from '../../MenuHeader';

function HomePage() {
    const history = useHistory();
    const handleClickButton = () => {
        history.push('/game')
    }

    const color = '#444C5C';
    return (
        <>
            <MenuHeader />
            <Header
                title='Pokemon game'
                desc='This is simple triard card game!'
                onClickButton={handleClickButton} />
            <Layout id='rules' title='Rules' urlBg={bg}>
                <p>
                    In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
              Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue. </p>
                <p>
                    To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
            </p>
            </Layout>
            <Layout
                id='cards'
                title='Cards'
                colorTitle={color}>
                <div className={s.flex}>
                    {
                        POKEMON.map((item, index) => <PokemonCard name={item.name} id={item.id} img={item.img} type={index.type} values={item.values} key={index} />)
                    }
                </div>
            </Layout>
            <Layout title='Pokemon game' urlBg={bg}>
                <p>
                    In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                    Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.
            </p>
                <p>
                    To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
            </p>
            </Layout>
            <Footer />
        </>
    );
}

export default HomePage;
