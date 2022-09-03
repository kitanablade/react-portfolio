import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer/>
      <h1 className="text-danger">Kit's Portfolio</h1>
    </div>
  );
}

export default App;
