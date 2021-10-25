import Home from './pages/Home';
import {MovieProvider} from './context/MovieContext';
import {DetailsProvider} from './context/DetailsContext';

function App() {
  return (
      <MovieProvider>
        <DetailsProvider>
          <Home/> 
        </DetailsProvider>
      </MovieProvider>
  );
}

export default App;
