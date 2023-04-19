import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import Books from './Components/Books';
import './App.css';
import Categories from './Components/Categories';

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>

  );
}

export default App;
