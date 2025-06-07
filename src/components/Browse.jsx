import { useSelector } from 'react-redux';
import useNowPlay from '../hooks/useNowPlay'
import Header from './Header'
import MainContainer from './mainContainer';
import SubContainer from './subContainer';

export default function Browse() {
useNowPlay();
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
