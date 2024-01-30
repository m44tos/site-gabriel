import React from 'react';
import './stylesPages/sobre.scss'; // Importe o arquivo de estilo CSS
import Secoes from '../components/secoes.js'

function Sobre() {
    return (
      <div className='sobreContainer'>
        <div className='conteudoSobre'>
          <Secoes title='Sobre mim' content='Olá! Eu sou Gabriel Matos, um autodidata entusiasta por desenvolvimento web, criação de jogos e programação.<br/> Aos 21 anos, estou dedicado a aprimorar minhas habilidades e conhecimentos nessas áreas, buscando constantemente oportunidades de aprendizado e crescimento profissional.'/>
          <Secoes title='Habilidades' content='<div align="center">
  <a href="https://github.com/m44tos">
    <img  height="160em" src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=m44tos&show_icons=true&theme=onedark&include_all_commits=true&count_private=true"/>
    <img  height="160em" src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=m44tos&layout=compact&langs_count=7&theme=onedark"/>
  </a>
</div>
<div style="display:flex; flex-wrap:wrap; justify-content: center; gap: 5px;"><br/>
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="Sass" src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img alt="Angular" src="https://img.shields.io/badge/Angular.io-DD0031?style=for-the-badge&logo=angular&logoColor=white">
  <img alt="Git" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img alt="Unity" src="https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white">
  <img alt="C#" src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white&logoWidth=20">
  <img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white">
  <img alt="Java" src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white">
  <img alt="Godot" src="https://img.shields.io/badge/Godot-478CBF?style=for-the-badge&logo=godot-engine&logoColor=white">
  <img alt="Scratch" src="https://img.shields.io/badge/Scratch-4D97FF?style=for-the-badge&logo=scratch&logoColor=white">
</div>'/>

          <Secoes title='Educação e Formação' content='Cursei Desenvolvimento de Jogos Digitais no IFBA (Instituto Federal da Bahia) antes de trancar minha matrícula por motivos pessoais. Busco constantemente cursos online e recursos educacionais para aprimorar minhas habilidades em desenvolvimento web, criação de jogos e programação em geral.'/>
          <Secoes title='Cursos e Certificações' content='Completei com êxito diversos cursos em plataformas como Alura, Fundação Bradesco, DIO e IFRS (Instituto Federal do Rio Grande do Sul), abrangendo tópicos relacionados a desenvolvimento web, criação de jogos e programação em diversas linguagens.'/>
          <Secoes title='Contato' content='Se você está interessado em colaborar em projetos ou tem oportunidades para um desenvolvedor autodidata motivado, sinta-se à vontade para entrar em contato comigo através do meu e-mail: <span>gabrielm.n@hotmail.com</span>'/>
        </div>
    </div>
    );
}

export default Sobre;
