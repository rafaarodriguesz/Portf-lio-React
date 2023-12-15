import './App.css'
import foto1 from "./images/foto1.jpeg"


function App() {

  return (
    <>
      <main id="container">
        <aside id="bio-container">
          <h2> Rafael Rodrigues </h2>
          <img src={foto1} id="bio-img" alt="imagem de perfil" />
          <p>17 anos <br></br><span class="highlight">🚀Dev Full Stack🚀</span></p>
          <p id="welcome-text"></p>
          <ul id="social-container">
            <li><a href="#" target="_blank" className='ig'><ion-icon name="logo-instagram"></ion-icon></a></li>
          </ul>
        </aside>

        <section id="about-container">
          <h1 id="name">Meus Principais Projetos</h1>
          <p id="title"><span class="highlight">Conheça meus principais projetos</span></p>

          <p class="description">

            <a href="https://rafaarodriguesz.github.io/Calculadora12/" className='myLink'> • CALCULADORA REACT📐</a>
            <br></br>
            <br />
            <a href="https://rafaarodriguesz.github.io/jumpcat3/" className='myLink'> • JUMP CAT 3🐱</a>
            <br></br>
            <br />
            <a href="https://rafaarodriguesz.github.io/TaskList/" className='myLink'> • TASK LIST✅</a>
            <br></br>
            <br />
            <a href="https://rafaarodriguesz.github.io/Flowers/" className='myLink'> • FLOWERS🌷</a>
          </p>

          <a href="https://github.com/rafaarodriguesz" id="btn-projects"><span> GitHub </span></a>

          <h2 id="skills-section-title" className='highlight'> Minhas Linguagens</h2>

          <div id="skills-container">
            <div id="skills-box">
              <p class="skills-title"> Front-end </p>
              <ion-icon name="logo-html5" size="large" class="html"></ion-icon>
              <ion-icon name="logo-css3" size="large" class="css"></ion-icon>
              <ion-icon name="logo-javascript" size="large" class="js"></ion-icon>
              <ion-icon name="logo-react" size="large" class="react"></ion-icon>
            </div>
            <div id="skills-box">
              <p class="skills-title"> Back-end </p>
              <ion-icon name="logo-nodejs" size="large" class="node"></ion-icon>
              <p className='myLang'>Express.js</p>
            </div>
            <div id="skills-box">
              <p class="skills-title"> Banco </p>
              <p className='myLang'>My SQL</p>
            </div>
          </div>
        </section>
      </main>

    </>
  )
}

export default App
