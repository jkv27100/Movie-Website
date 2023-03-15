import './App.css';
import Navbar from './components/Navbar';
import MovieRoute from './Routes/index';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <MovieRoute />
    </div>
  );
}

export default App;
