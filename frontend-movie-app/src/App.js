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
  const [filteredResult, setFilteredResult] = useState([])

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

  const handleSearch = (searchValue) => {
    setText(searchValue)
    if (text !== '') {
      const filteredData = data.filter((item) => {
         // return Object.values(item).join('').toLowerCase().includes(text.toLowerCase()) //this searches all through the data values(title, description and so on)
          return item.title.toLowerCase().includes(text.toLowerCase())
      })
      setFilteredResult(filteredData)
    } else{
      setFilteredResult(data)
    }
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Header handleSearch={handleSearch} filteredResult={filteredResult} text={text}/>
        <Routes>
          <Route path="/" element={<HomePage movieData={data} numberOfPages={numberOfPages} filteredResult={filteredResult} text={text} setPageNumber={setPageNumber}/>}/>
          <Route path="/details/:id" element={<DetailsPage movieData={data}/>}/>
        </Routes>
        <ScrollToTop/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
