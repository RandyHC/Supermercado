import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import '../Estilos/inicio.css';



import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom"
import Imagenes from '../Componentes/Image';
import Tarjeta from '../Componentes/Card';
import Lista from '../Componentes/List';
import Datos from '../Componentes/Dates';


const Inicio = () => {
    return(
        <div className='content-inicio'>
            <div className='content-p'>
                <div className='img-p-i' >
                    <div className='img-p-s'>
                        <div className='img-p-i-1'>
                            <Imagenes className='img1' imagen="./public/img-inicio/portada1.png" ></Imagenes>
                            <Imagenes className='img2' imagen="./public/img-inicio/portada2.png" ></Imagenes>
                        </div>
                        <div className='img-p-i-2'>
                            <Imagenes className='img3' imagen="./public/img-inicio/portada3.png" ></Imagenes>
                            <Imagenes className='img4' imagen="./public/img-inicio/portada4.png" ></Imagenes>
                            <Imagenes className='img5' imagen="./public/img-inicio/portada5.png" ></Imagenes>
                        </div>
                    </div>
                </div>
                <div className='text-port'>
                    <h3 className='tittle-p'>Bienvenido</h3>
                    <p className='text-p'>Esta es la mejor tienda online</p>
                </div>
            </div>
            <div>
                <h1>Productos</h1>
            </div>
            <div className='content-prod'>
                <Tarjeta boton="Comprar" imagen="./public/img-inicio/gaseosa.png" titulo="Gaseosas"></Tarjeta>
                <Tarjeta boton="Comprar" imagen="./public/img-inicio/gaseosa.png" titulo="Lacteos"></Tarjeta>
                <Tarjeta boton="Comprar" imagen="./public/img-inicio/gaseosa.png" titulo="Licores"></Tarjeta>
                <Tarjeta boton="Comprar" imagen="./public/img-inicio/despensa.png" titulo="Despensa"></Tarjeta>
                <Tarjeta boton="Comprar" imagen="./public/img-inicio/helados.png" titulo="Helados"></Tarjeta>
            </div>
            <div>
                <h1>Ofertas</h1>
            </div>
            <div className='content-ofert'>
                <Lista boton="Agregar al carrito" imagen="./public/img-inicio/helados.png" titulo="Detergente" precio="Bs. 20,50"></Lista>
                <Lista boton="Agregar al carrito" imagen="./public/img-inicio/helados.png" titulo="Mantequilla" precio="Bs. 8,50"></Lista>
                <Lista boton="Agregar al carrito" imagen="./public/img-inicio/helados.png" titulo="Aceite" precio="Bs. 8,50"></Lista>
                <Lista boton="Agregar al carrito" imagen="./public/img-inicio/helados.png" titulo="Pan Molde" precio="Bs. 10,50"></Lista>
                <Lista boton="Agregar al carrito" imagen="./public/img-inicio/helados.png" titulo="Croquetas" precio="Bs. 10,00"></Lista>
                <Lista boton="Agregar al carrito" imagen="./public/img-inicio/helados.png" titulo="Coca Cola" precio="Bs. 13,50"></Lista>
                <Lista boton="Agregar al carrito" imagen="./public/img-inicio/helados.png" titulo="Piposal" precio="Bs. 00,50"></Lista>
            </div>
            <div className='posicion-b pt-sans-regular'>
                <div className='boton-perso'>
                        <Nav.Link className='boton-o' as={Link} to="/ofertas" >Ver más</Nav.Link>
                </div>
            </div>
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
export default Inicio;