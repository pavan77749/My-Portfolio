export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            Hello 👋, I'm <b> Pavan Gupta</b>, and I'm on a journey to become a Full Stack Developer.
            Currently pursuing my BE Computer Engineering at <b style={{color:'red'}} >Shree L.R Tiwari College of Engineering</b> ,I'm passionate about web development and software Engineering.
          </p>
          <p className="hero--section-description">
            My mission is to transform my passion for coding into real-world solutions. I'm open to <b>internship opportunities</b> , projects, and mentorship that can help me grow and make a positive impact in the field.
          </p>
        </div>
      </div>
    </section>
  );
}
