import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../Estilos/List.css'

function Lista(props){
    return(
        <div className='content-list'>
            <Card className='card-list'>
                <Card.Img className='img-list' variant="top" src={props.imagen} />
                <Card.Body>
                    <Card.Title>{props.titulo}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{props.precio}</ListGroup.Item>
                    <Button className='comprar-o' variant="primary">{props.boton}</Button>
                </ListGroup>
            </Card>
        </div>
    );
}
export default Lista;