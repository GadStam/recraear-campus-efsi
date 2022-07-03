import './App.css';
import Header from './components/header.js'
import Carrusel from './components/carrusel.js'
import Carta from './components/card';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Footer from './components/footer.js';


function App() {
  return (
  <div className="App">
    <Container>
        <Header />
        <Carrusel />
        <div className="row col-12">

          <div className="col-md-3">
          <Carta />
          </div>
          <div className="col-md-6">
          <Carta />
          </div>
          <div className="col-md-3">
          <Carta />
          </div>

        </div>
        <div className="row col-12">

          <div className="col-md-3">
          <Carta />
          </div>
          <div className="col-md-6">
          <Carta />
          </div>
          <div className="col-md-3">
          <Carta />
          </div>

        </div>
    </Container>
    <Footer />
</div>
)}
export default App;