import React, { useState } from 'react';
import './stylesComp/secoes.scss';

function Secoes(props) {
  const [contentV, setVisiContent] = useState(false);
  const [titleV, setVisiTitle] = useState(false);

  const toggleAll = () => {
    setVisiTitle(!titleV);
    setVisiContent(!contentV);
  };
  return (
    <div className="secao">
      <h1
        className={`titulo ${titleV ? 'titleVisivel' : ''}`}
        onClick={toggleAll}
      >
        {props.title}&nbsp;
        <i className="fa-solid fa-circle-chevron-down"></i>
      </h1>
      <div className={`conteudoSecao ${contentV ? 'contentVisivel' : ''}`}>
        <hr/>
        <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
      </div>
    </div>
  );
  
}

export default Secoes;
