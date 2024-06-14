import '../Estilos/inicio.css';
import Imagenes from '../Componentes/Image';
import Tarjeta from '../Componentes/Card';
import Lista from '../Componentes/List';
import Datos from '../Componentes/Dates';

import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom"


const Oferta = () => {
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
                    <h3 className='tittle-p'>Ofertas</h3>
                    <p className='text-p'>Estamos con ofertas toda la semana</p>
                </div>
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
                <Lista boton="Agregar al carrito" imagen="./public/img-inicio/helados.png" titulo="Piposal" precio="Bs. 00,50"></Lista>
                <Lista boton="Agregar al carrito" imagen="./public/img-inicio/helados.png" titulo="Piposal" precio="Bs. 00,50"></Lista>
                <Lista boton="Agregar al carrito" imagen="./public/img-inicio/helados.png" titulo="Piposal" precio="Bs. 00,50"></Lista>
                <Lista boton="Agregar al carrito" imagen="./public/img-inicio/helados.png" titulo="Piposal" precio="Bs. 00,50"></Lista>
                <Lista boton="Agregar al carrito" imagen="./public/img-inicio/helados.png" titulo="Piposal" precio="Bs. 00,50"></Lista>
                <Lista boton="Agregar al carrito" imagen="./public/img-inicio/helados.png" titulo="Piposal" precio="Bs. 00,50"></Lista>
                <Lista boton="Agregar al carrito" imagen="./public/img-inicio/helados.png" titulo="Piposal" precio="Bs. 00,50"></Lista>
            </div>
            <div>
                <h1>Paquetes</h1>
            </div>
            <div className='content-prod'>
                <Tarjeta boton="Agregar al carrito" imagen="./public/img-inicio/gaseosa.png" titulo="Coca Cola"></Tarjeta>
                <Tarjeta boton="Agregar al carrito" imagen="./public/img-inicio/gaseosa.png" titulo="Pepsi"></Tarjeta>
                <Tarjeta boton="Agregar al carrito" imagen="./public/img-inicio/gaseosa.png" titulo="Té"></Tarjeta>
                <Tarjeta boton="Agregar al carrito" imagen="./public/img-inicio/despensa.png" titulo="Bom o Bom"></Tarjeta>
                <Tarjeta boton="Agregar al carrito" imagen="./public/img-inicio/helados.png" titulo="Leche"></Tarjeta>
            </div>
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
export default Oferta;