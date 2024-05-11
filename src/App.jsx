/* eslint-disable no-undef */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import DetailsPage from './pages/DetailsPage';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import { DetailsProvider } from './context/DetailsContext';

const App = () => {
  return (
    <DetailsProvider>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/detail/:id' element={<DetailsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </DetailsProvider>
  );
};
export default App;
