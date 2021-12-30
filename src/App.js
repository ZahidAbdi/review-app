import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';
import ReviewStats from './components/ReviewStats';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import { ReviewProvider } from './context/ReviewContext';

function App() {
  return (
    <ReviewProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <ReviewForm />
                  <ReviewStats />
                  <ReviewList />
                </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </ReviewProvider>
  );
}

export default App;
