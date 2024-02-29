import './css/App.css';
import Header from './layout/Header';
import HomePage from './view-components/HomePage';
import PageNotFound from './view-components/PageNotFound';
import Auth from './view-components/authentication/Auth';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/user-auth' element={<Auth />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
