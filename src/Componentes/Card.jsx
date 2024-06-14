import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Estilos/Card.css';

function Tarjeta(props){
    return(
        <div>
            <Card className='card-p'>
                <Card.Img className='img-card' variant="top" src={props.imagen}/>
                <Card.Body className='titulo-card'>
                <Card.Title>{props.titulo}</Card.Title>
                <Button className='comprar-p'>{props.boton}</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
export default Tarjeta;