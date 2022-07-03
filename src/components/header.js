import Navbar from "react-bootstrap/Navbar"
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from "../../src/img/logo.png"
import Perfil from "../../src/img/perfil.PNG"
import Lineas from "../../src/img/lineas.PNG"

const Header = () => (
<Navbar >
  <Container class="box">
  <Navbar.Brand>
      <img
        src= {Logo}
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <img
        src= {Perfil}
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      <img
        src= {Lineas}
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Collapse>
  </Container>
</Navbar>
 )
 export default Header;
