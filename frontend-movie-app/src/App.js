import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';

function App() {
  const [data, setData] = useState([])
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [text, setText] = useState('')


  useEffect(() => {
    const movieData = async() => {
        await fetch(`http://localhost:4500/movies?page=${pageNumber}`)
        .then((response) =>  response.json())
        .then(({ totalPages, movies }) => {
          setData(movies)
          setNumberOfPages(totalPages)
        })
    }

    movieData()
  }, [pageNumber])


  return (
    <div className="App">
      <BrowserRouter>
        <Header text={text} setText={setText}/>
        <Routes>
          <Route path="/" element={<HomePage movieData={data} numberOfPages={numberOfPages} setPageNumber={setPageNumber}/>}/>
          <Route path="/details/:id" element={<DetailsPage movieData={data}/>}/>
        </Routes>
        <ScrollToTop/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
