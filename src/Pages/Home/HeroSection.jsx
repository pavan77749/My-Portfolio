import {useTypewriter,Cursor} from 'react-simple-typewriter'
import Resume from '../../data/postman.pdf'

export default function HeroSection() {
  const [typeEffect] = useTypewriter({
    words: ['Frontend','Backend','UI/UX Designer'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:40
  })


  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey,👋 I'm Pavan Gupta</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">{typeEffect}</span>{" "}
            <span style={{color:"#ff205f"}}><Cursor/></span>
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I'm excited about the endless possibilities in the tech world and love to explore both front-end and back-end technologies.
          
          </p>
        </div>
        <a className="btn btn-primary" href={Resume} download="Resume"  >Download Resume</a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
