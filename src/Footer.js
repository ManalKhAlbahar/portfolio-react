import twitter from "./img/twitter.svg";
import instagram from "./img/instagram.svg";
import github from "./img/github.svg";

const Footer = () => {
  return (
    <div className="footer">
      <p>Follow me on social media</p>
      <div className="social-icons">
        <img src={twitter} alt="twitter" className="social-icon" />
        <img src={instagram} alt="instagram" className="social-icon" />
        <img src={github} alt="github" className="social-icon" />
      </div>
      <p className="copyright">Copyright 2017 Joe Portfolio</p>
    </div>
  );
};

export default Footer;