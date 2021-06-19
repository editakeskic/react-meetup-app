import { Route } from 'react-router-dom';

import AllMeetupsPage from  './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavouritesPage from './pages/Favourites';

function App() {
  return <div>
    <Route path='/'>
      <AllMeetupsPage />
    </Route>
    <Route path='/new-meetup'>
      <NewMeetupPage />
    </Route>
    <Route path='Favourites'>
      <FavouritesPage />
    </Route>
  </div>;
}

export default App;
