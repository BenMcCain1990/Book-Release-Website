import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <h4>
          Designed by Studio Name. Content © Author, 2022. Photo and Art
          credits: Artist (Photos); Illustrator (Illustrations).
        </h4>
      </div>
      <div className="icons">
        <a href="https://www.instagram.com/" target="_blank">
          <FontAwesomeIcon className="icon" icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <FontAwesomeIcon className="icon" icon={faFacebook} />
        </a>
        <a href="https://www.pinterest.com/" target="_blank">
          <FontAwesomeIcon className="icon" icon={faPinterestP} />
        </a>
        <a href="https://www.twitter.com/" target="_blank">
          <FontAwesomeIcon className="icon" icon={faTwitter} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
