import useNowPlay from '../hooks/useNowPlay'
import Header from './Header'
import MainContainer from './mainContainer';
import SubContainer from './SubContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpComing from '../hooks/useUpComing';

export default function Browse() {
useNowPlay();
usePopularMovies();
useTopRated();
useUpComing();

  return (
    <>
    <Header/>

<MainContainer   />

<SubContainer />
    
    </>
  )
}
