import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import { movieData } from './Data';

function App() {
  const [data, setData] = useState(movieData)
  const [text, setText] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if(text !== ''){
      const filteredSearch = data.filter(movie => movie.title.includes(text.toLowerCase()))
      setData(filteredSearch)
    }
  }

 

  return (
    <div className="App">
      <BrowserRouter>
        <Header text={text} setText={setText} handleSearch={handleSearch}/>
        <Routes>
          <Route path="/" element={<HomePage movieData={data} />}/>
          <Route path="/details/:id" element={<DetailsPage/>}/>
        </Routes>
        <ScrollToTop/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
