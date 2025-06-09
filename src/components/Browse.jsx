import useNowPlay from '../hooks/useNowPlay'
import Header from './Header'
import MainContainer from './MainContainer';
import SubContainer from './SubContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpComing from '../hooks/useUpComing';
import { useSelector } from 'react-redux';
import GptContainer from './GptContainer';

export default function Browse() {
useNowPlay();
usePopularMovies();
useTopRated();
useUpComing();

const isGpt = useSelector(store => store.movies.GptStatus);

  return (
    <>
    <Header/>
{isGpt ? (<GptContainer/>):(<>   
<MainContainer   />
<SubContainer />
</>)}


    
    </>
  )
}
