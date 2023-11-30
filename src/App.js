import './App.css';
import Button from './components/Button';
import GoogleImage from './components/GoogleImage';
import Header from './components/Header'
import InputSearch from './components/InputSearch';

function App() {
  return (
    <div className="App">
      <Header />
      <GoogleImage />
      <InputSearch />
      <Button />
    </div>
  );
}

export default App;
