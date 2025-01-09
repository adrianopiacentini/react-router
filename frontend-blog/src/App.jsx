import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import PostPage from './components/PostPage'
import Contacts from './components/Contacts'
import AppLayout from './components/AppLayout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={AppLayout}>
          <Route path='/' Component={HomePage} />
          <Route path='/postpage' Component={PostPage} />
          <Route path='/contacts' Component={Contacts} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;