import Card from "react-bootstrap/Card"
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import Inscripcion from "../../src/img/inscipcion.jpeg"
import Perfil from "../../src/img/perfil.PNG"
import Lineas from "../../src/img/lineas.PNG"

const Carta = () => (
<Card style={{marginTop:20, textAlign:"left", boxShadow: '0 2px 5px 0 #888', padding:'1rem'}}>
    <Card.Header style={{color:"#039be5", fontSize:'19px', background:'white'}}>
    Inscripción ciclo lectivo 2021 - Nivel Secundario
    </Card.Header>
    <Card.Img variant="top" src={Inscripcion}/>
    <Card.Body>
        <Card.Text>
        Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el ciclo 2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!
        </Card.Text>
    </Card.Body>
</Card>
)
export default Carta;
