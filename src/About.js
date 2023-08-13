import  { forwardRef } from 'react';
import joe from "./img/joe-portfolio.png";


const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="about-me">
      <img className="about-img" src={joe} alt="joe" />
      <h1 className="about-title">Joe Portfolio</h1>
      <h2 className="about-subtitle">DESIGNER & DEVELOPER</h2>
      <div className="about-text">
      <p>Aenean mattis tristique elementum. Duis massa tellus, tempus non fermentum at, venenatis et augue. Phasellus tristique purus sed sagittis interdum. Duis luctus sapien justo, vel viverra ex convallis et. Maecenas suscipit lacus ut lectus mattis ornare. Vestibulum faucibus purus sit amet erat lobortis, tristique fringilla leo sodales. Interdum et malesuada fames ac ante.</p>
        <p>Aenean mattis tristique elementum. Duis massa tellus, tempus non fermentum at, venenatis et augue. Phasellus tristique purus sed sagittis interdum. Duis luctus sapien justo, vel viverra ex convallis et. Maecenas suscipit lacus ut lectus mattis ornare. Vestibulum faucibus purus sit amet erat lobortis, tristique fringilla leo sodales. Interdum et malesuada fames ac ante.</p>
      </div>
    </div>
  );
});

export default About;
