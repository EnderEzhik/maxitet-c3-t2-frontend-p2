import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/result" element={<Result/>}/>
      </Routes>
    </main>
  )
}

export default App
