import React from 'react';
import './stylesPages/home.scss';

function Home() {
  return (
    <div className='homeContainer'>
      <div class="cards">
            <div class="AP1">
                <div class="fotoGab"></div>
                <div className='textAP1'>
                    <h3>GABRIEL<br/><span>MATOS</span></h3>
                    <h5>FRONT END<br/>DEVELOPER</h5>
                </div>
            </div>
            <div class="AP2">
                <h4>😊 Olá! Bem-vind@ ao meu cantinho na web!<br/><br/></h4>
                <p>Estou super feliz em te receber aqui. Dê uma espiadinha para descobrir mais sobre mim, minhas habilidades e dê uma olhada no meu portfólio.<br/><br/>Ah, só para avisar, o site ainda está em construção, mas prometo que em breve estará cheio de novidades. Sinta-se à vontade para explorar e espero que curta a visita! 👋</p>
            </div>
        </div>
    </div>
  );
}

export default Home;
