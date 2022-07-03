import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import Principal from "../../src/img/principal.jpeg"
import Container from 'react-bootstrap/Container';

const Foto = () => (
<Container class="box">
<Carousel style={{marginTop:20}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Principal}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Principal}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Principal}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</Container>
)
export default Foto;