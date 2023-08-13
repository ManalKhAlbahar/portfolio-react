import welcome1 from "./img/welcome-01.png";
import welcome2 from "./img/welcome-02.png";

const Intro = () => {
    return ( 
    <div className="intro">
<div className="intro-left">
    <img src={welcome1} alt="laptop" />
</div>
<div className="intro-middle">
    <h2>MAKING IT HAPPEN</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet eleifend justo. Quisque non magna vel justo eleifend imperdiet</p>
    </div> 
<div className="intro-right">
    <img src={welcome2} alt="two laptop" />
</div>
    </div> 
    );
}
 
export default Intro;