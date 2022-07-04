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
    <Header />

    <Container>
    <div class="row">
      <div class="row-col-12">
          <Carrusel />
        </div>
        
          <div className="col-md-3">
          <Carta />
          </div>
          <div className="col-md-6">
          <Carta />
          </div>
          <div className="col-md-3">
          <Carta />
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
        </div>
      </Container>
    <Footer />
</div>
)}
export default App;