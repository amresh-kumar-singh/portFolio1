import "./social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faGooglePlusG,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
const Social = () => {
  return (
    <ul className="social">
      <li>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="fa" icon={faFacebookF} />
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="fa" icon={faLinkedinIn} />
        </a>
      </li>
      <li>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="fa" icon={faGooglePlusG} />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/amresh-kumar-singh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="fa" icon={faGithub} />
        </a>
      </li>
    </ul>
  );
};
export default Social;
