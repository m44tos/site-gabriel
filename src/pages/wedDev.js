import React from 'react';
import './stylesPages/webDev.scss';
import printPokedex from '../assets/images/printPokedex.PNG'

function WebDev() {
  return (
    <div className='webContainer'>
      <div className='projContainer'>
        <div className='proPokedex'>
          <h3>Web Pokédex</h3>
          <hr/>
          <div className='pokedex-image'>
            <img src={printPokedex} alt='Print da Web Pokédex' />
          </div>
          <hr/>
          <p>A Web Pokédex é uma aplicação web que permite aos usuários explorar informações sobre Pokémons. Desenvolvida com HTML, CSS, JavaScript e uma API de Pokémon, oferece uma experiência envolvente e responsiva, destacando detalhes como tipos, nome e id.</p>
          <ul>
            <li>Repositório em: <a href='https://github.com/m44tos/Pokedex' target='_blank' rel='noopener noreferrer'>GitHub</a></li>
            <li>Hospedado em: <a href='https://m44tos.github.io/Pokedex/' target='_blank' rel='noopener noreferrer'>GitHub Pages</a></li>
          </ul>
        </div>
        <div className='card2'><p>🛠️</p></div>
        <div className='card3'><p>🛠️</p></div>
      </div>
    </div>
  );
}

export default WebDev;
