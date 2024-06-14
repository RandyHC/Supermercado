import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';

import '../Estilos/pedido.css';
import '../Estilos/inicio.css';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom"
import Imagenes from '../Componentes/Image';
import Tarjeta from '../Componentes/Card';
import Lista from '../Componentes/List';
import Datos from '../Componentes/Dates';


const Pedido = () => {
    return(
        <div className='content-inicio'>
            <div className='content-p'>
                <div className='img-p-i' >
                    <div className='img-p-s'>
                        <div className='img-p-i-1'>
                            <Imagenes className='img1' imagen="./public/img-inicio/portada.jpg" ></Imagenes>
                            <Imagenes className='img2' imagen="./public/img-inicio/portada.jpg" ></Imagenes>
                        </div>
                        <div className='img-p-i-2'>
                            <Imagenes className='img3' imagen="./public/img-inicio/portada.jpg" ></Imagenes>
                            <Imagenes className='img4' imagen="./public/img-inicio/portada.jpg" ></Imagenes>
                            <Imagenes className='img5' imagen="./public/img-inicio/portada.jpg" ></Imagenes>
                        </div>
                    </div>
                </div>
                <div className='text-port'>
                    <h3 className='tittle-p'>Pedidos</h3>
                    <p className='text-p'>Aqui encontraras tus productos seleccionados</p>
                </div>
            </div>
            <div className='container-b'>
                <h1 className='tittle-p'>Tu Carrito</h1>
            </div>
            <div className='container-b'>
                <p className='text-p'>Paquetes</p>
            </div>
            <div className='content-prod container-b'>
                <Tarjeta boton="X" imagen="./public/img-inicio/gaseosa.png" titulo="Coca Cola 3L"></Tarjeta>
                <Tarjeta boton="X" imagen="./public/img-inicio/gaseosa.png" titulo="Pepsi 3L"></Tarjeta>
                <Tarjeta boton="X" imagen="./public/img-inicio/gaseosa.png" titulo="Té 20 Uds."></Tarjeta>
                <Tarjeta boton="X" imagen="./public/img-inicio/despensa.png" titulo="Bom o Bom 24 Uds."></Tarjeta>
                <Tarjeta boton="X" imagen="./public/img-inicio/helados.png" titulo="Oro 3L"></Tarjeta>
            </div>
            <br />
            <div className='container-b'>
                <p className='text-p'>Unidades</p>
            </div>
            <div className='content-ofert'>
                <Lista boton="X" imagen="./public/img-inicio/helados.png" titulo="Piposal" precio="Bs. 00,50"></Lista>
                <Lista boton="X" imagen="./public/img-inicio/helados.png" titulo="Piposal" precio="Bs. 00,50"></Lista>
                <Lista boton="X" imagen="./public/img-inicio/helados.png" titulo="Piposal" precio="Bs. 00,50"></Lista>
                <Lista boton="X" imagen="./public/img-inicio/helados.png" titulo="Piposal" precio="Bs. 00,50"></Lista>
                <Lista boton="X" imagen="./public/img-inicio/helados.png" titulo="Piposal" precio="Bs. 00,50"></Lista>
            </div>
            <div className='container-b'>
                <Button className='boton-ancho' variant="outline-primary">COMPRAR</Button>
            </div>
            <div></div>
            <br />
            <div className='content-footer'>
                <div>
                    <h2>Formulario</h2>
                </div>
                <div className="content-redes">
                    <div className='red'>
                    <Datos imagen="./public/Octocat.png" red="Facebook" direccion="SuperBol"></Datos>
                    </div>
                    <div className='red'>
                    <Datos imagen="./public/Octocat.png" red="Instagram" direccion="SuperBol"></Datos>
                    </div>
                    <div className='red'>
                    <Datos imagen="./public/Octocat.png" red="WhatsApp" direccion="SuperBol"></Datos>
                    </div>
                    <div className='red'>
                    <Datos imagen="./public/Octocat.png" red="Youtube" direccion="SuperBol"></Datos>
                    </div>
                    <div className='red'>
                    <Datos imagen="./public/Octocat.png" red="TikTok" direccion="SuperBol"></Datos>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Pedido