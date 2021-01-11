import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesActions';
//Animation and styling
import { motion } from 'framer-motion';
import styled from 'styled-components';
//Components
import Game from '../components/Game';
import { popularGamesUrl } from '../api';

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

/*original is 500 px
    This value tells the column to take up 300px, 
    and if it doesn't have enough space for thar, to expand
    and fill all available space.  
*/

const Home = () => {
  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //Get data from redux store
  const { popular, upComing, newGames } = useSelector((state) => state.games);

  console.log(popular);

  return (
    <GameList>
      <h1>Home</h1>
      <Games>
        {upComing.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

export default Home;
