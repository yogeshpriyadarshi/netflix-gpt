import { useSelector } from 'react-redux';
import useNowPlay from '../hooks/useNowPlay'
import Header from './Header'
import MainContainer from './mainContainer';
import SubContainer from './subContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpComing from '../hooks/useUpComing';

export default function Browse() {
useNowPlay();
usePopularMovies();
useTopRated();
useUpComing();
 const movies = useSelector(store => store?.movies?.nowPlay);
 if(!movies) return;

  return (
    <>
    <Header/>

<MainContainer   />

<SubContainer />



    
    </>
  )
}
