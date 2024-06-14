import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Inicio from './Paginas/inicio';
import Oferta from './Paginas/oferta';
import Pedido from './Paginas/pedido';
import Registrate from './Paginas/registrate';
import NavbarExapmle from './Componentes/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path='/' element={ <NavbarExapmle />}>
         <Route index element={ <Inicio />} />
         <Route path='ofertas' element={ <Oferta />} />
         <Route path='pedidos' element={ <Pedido />} />
         <Route path='registrate' element={ <Registrate />} />
        </Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
