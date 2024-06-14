import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import '../Estilos/Dates.css'

function Datos(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button className='datos-boton'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      > 
        <div className='img-text-list'>
        <img className='img-datos' src={props.imagen} alt="" srcset="" />
        <h5 className='img-text'>{props.red}</h5>
        </div>
      </Button>
      <Collapse className='caja-texto' in={open}>
        <div className='datos-texto' id="example-collapse-text">
          {props.direccion}
        </div>
      </Collapse>
    </>
  );
}

export default Datos;