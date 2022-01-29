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
        <FontAwesomeIcon className="icon" icon={faInstagram} />
        <FontAwesomeIcon className="icon" icon={faFacebook} />
        <FontAwesomeIcon className="icon" icon={faPinterestP} />
        <FontAwesomeIcon className="icon" icon={faTwitter} />
      </div>
    </div>
  );
};

export default Footer;
