import './App.css';
import Button from './components/Button';
import Footer from './components/Footer';
import GoogleImage from './components/GoogleImage';
import Header from './components/Header'
import InputSearch from './components/InputSearch';
import PrivacyCheck from './components/PrivacyCheck';

function App() {
  return (
    <div className="App">
      <Header />
      <GoogleImage />
      <InputSearch />
      <Button />
      <PrivacyCheck />
      <Footer />
    </div>
  );
}

export default App;
