import '../Estilos/registrate.css';
import '../Estilos/inicio.css';
import Imagenes from '../Componentes/Image';
import Tarjeta from '../Componentes/Card';
import Lista from '../Componentes/List';
import Datos from '../Componentes/Dates';

import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom"

const Registrate = () => {
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
                    <h3 className='tittle-p'>Regístrate</h3>
                    <p className='text-p'>Para recibir notificaciones cuando estemos con descuentos especiales</p>
                </div>
            </div>
            <div className='content-img'>
                <img className='celular' src="./public/img-registrate/3d-casual-life-scanning-qr-code.png" alt="foto1" />
                <img className='qr' src="./public/img-registrate/memphis-qr-code-1.png" alt="foto2" />
                <div className='text'>
                    <h1>Hola</h1>
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
export default Registrate