import Navbar from "react-bootstrap/Navbar"
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from "../../src/img/logo.png"
import Perfil from "../../src/img/perfil.PNG"
import Lineas from "../../src/img/lineas.PNG"

const Header = () => (
<Navbar style={{boxShadow: '0 2px 5px 0 #888', paddingTop:'0', paddingBottom:'0', height:'66px'}}>
  <Navbar.Brand style={{height:'50px', width:'130px'}}>
      <img
        src= {Logo}
        height="50px"
        width="130x"
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
</Navbar>
 )
 export default Header;
