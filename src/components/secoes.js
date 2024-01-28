import React, { useState } from 'react';
import './stylesComp/secoes.scss';

function Secoes(props) {
  const [estaVisivel, setVisibilidade] = useState(false); // Estado para controlar a visibilidade do conteúdo

  const toggleContent = () => {
    setVisibilidade(!estaVisivel); // Inverte o estado de visibilidade
  };

  return (
    <div className="secao">
      <h1
        className={`titulo ${estaVisivel ? 'A' : ''}`}
        onClick={toggleContent}
      >
        {props.title}&nbsp;
        <i className="fa-solid fa-circle-chevron-down"></i>
      </h1>
      <div className={`conteudoSecao ${estaVisivel ? 'visivel' : ''}`}>
        <hr/>
        <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
      </div>
    </div>
  );
  
}

export default Secoes;
