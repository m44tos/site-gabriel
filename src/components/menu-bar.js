import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './stylesComp/menu-bar.scss';

function MenuBar() {
  useEffect(() => {
    const addClass = () => {
      const btnMenu = document.querySelector('.menuPort');
      const MenuSuspenso = document.querySelector('.dropdown-menu');

      if (btnMenu && MenuSuspenso) {
        const handleMouseOver = () => {
          MenuSuspenso.classList.add('aberto');
        };

        const handleMouseLeave = () => {
          MenuSuspenso.classList.remove('aberto');
        };

        btnMenu.addEventListener('mouseover', handleMouseOver);
        btnMenu.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          btnMenu.removeEventListener('mouseover', handleMouseOver);
          btnMenu.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    };

    addClass();
  }, []);

  return (
    <div className="menuBarContainer">
      <Link to="/" className="btnName">Gabriel <span>Matos</span><h6> | FRONT END DEVELOPER</h6></Link>
      <ul className="btnNav">
        <li><Link to='/'>Início</Link></li>
        <li><Link to='/Sobre'>Sobre</Link></li>
        <li className="menuPort">
          <Link>Portfólio&nbsp;<i className="fa-solid fa-caret-down"/></Link>
          <ul className="dropdown-menu">
            <Link className="dropdown-item" to="/webdev">Web Development</Link>
            <Link className="dropdown-item" to="/gamedev">Game Development</Link>
          </ul>
        </li>
      </ul>
      <ul className="btnRedes">
        <li><a className="fa-brands fa-github" href='https://github.com/m44tos' target='_blank' rel='noopener noreferrer' aria-label='Link para o GitHub'></a></li>
        <li><a className="fa-brands fa-linkedin" href='https://www.linkedin.com/in/gabriel-m44tos/' target='_blank' rel='noopener noreferrer' aria-label='Link para o LinkedIn'></a></li>
        <li><a className="fa-brands fa-instagram" href='https://www.instagram.com/m44tos' target='_blank' rel='noopener noreferrer' aria-label='Link para o Instagram'></a></li>
      </ul>
    </div>
  );
}

export default MenuBar;
