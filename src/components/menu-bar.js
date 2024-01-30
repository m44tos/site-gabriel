import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './stylesComp/menu-bar.scss';

function MenuBar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [hambAberto, setHambAberto] = useState(false);
  const [simbol, setSimbol] = useState('☰');

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };
  const toggleHamb =()=>{
    setHambAberto(!hambAberto);
    setSimbol(hambAberto ? '☰' : '✕');
  }
  const removerClasseActive = () => {
    setHambAberto(false);
    setSimbol('☰');
  };

  return (
    <div className="menuBarContainer">
      <Link to="/" className="btnName">GABRIEL <span>MATOS</span><h6> | FRONT END DEVELOPER</h6></Link>
      <button className='menuHamb' onClick={toggleHamb}>{simbol}</button>
      <nav className={`navContainer ${hambAberto ? 'active' : ''}`}>
      <ul className="btnNav">
        <li><Link to='/' onClick={removerClasseActive}>Início</Link></li>
        <li><Link to='/Sobre' onClick={removerClasseActive}>Sobre</Link></li>
        <li className={`menuPort ${menuAberto ? 'A' : ''}`}onClick={toggleMenu}>
          <a>
            Portfólio&nbsp;
            <i className="fa-solid fa-caret-down" />
          </a>
          <ul className={`dropdown-menu ${menuAberto ? 'dropAberto' : ''}`}onClick={toggleMenu}>
            <Link className="dropdown-item" to="/webdev"onClick={removerClasseActive}>Web Development</Link>
            <Link className="dropdown-item" to="/gamedev"onClick={removerClasseActive}>Game Development</Link>
          </ul>
        </li>
      </ul>
      <ul className="btnRedes">
        <li><a className="fa-brands fa-github" href='https://github.com/m44tos' target='_blank' rel='noopener noreferrer' aria-label='Link para o GitHub'></a></li>
        <li><a className="fa-brands fa-linkedin" href='https://www.linkedin.com/in/gabriel-m44tos/' target='_blank' rel='noopener noreferrer' aria-label='Link para o LinkedIn'></a></li>
        <li><a className="fa-brands fa-instagram" href='https://www.instagram.com/m44tos' target='_blank' rel='noopener noreferrer' aria-label='Link para o Instagram'></a></li>
      </ul>
      </nav>
    </div>
  );
}

export default MenuBar;
