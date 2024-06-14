import Image from 'react-bootstrap/Image';
import '../Estilos/Image.css';

function Imagenes(props){
    return(
        <div>
            <Image className='img-item' src={props.imagen} fluid />
        </div>
    );
}
export default Imagenes;