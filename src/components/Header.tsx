import './css/Header.css';

import logo from '../assets/logo-small.png';
export function Header() {
    
    return (
        <header>
            <div className='menu-container'>
                <input type='checkbox' className='navtoggle' id='togglecheck-header'></input>
                <nav>
                    <ul>
                        <li><a href='#'>Empresa</a></li>
                        <li><a href='#'>Casos de éxito</a></li>
                        <li><a href='#'>Servicios</a></li>
                        <li><a href='#'>Productos</a></li>
                        <li><a href='#'>Contacto</a></li>
                    </ul>
                </nav>
                <label htmlFor='togglecheck-header' className='navtoggle-label'>
                    <span></span>
                </label>

                 <p><img src={logo}></img></p> 
            </div>
        </header>
    );
}