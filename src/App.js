import Home from './pages/Home';
import {MovieProvider} from './context/MovieContext';
import {DetailsProvider} from './context/DetailsContext';
import {FavouriteProvider} from './context/FavouriteContext';
import {WatchLaterProvider} from './context/WatchLaterContext';

function App() {
  return (
      <MovieProvider>
        <DetailsProvider>
          <WatchLaterProvider>
            <FavouriteProvider>
                 <Home/> 
            </FavouriteProvider>
          </WatchLaterProvider>
        </DetailsProvider>
      </MovieProvider>
  );
}

export default App;
