import "./social.css";

const Social = () => {
  return (
    <ul className="social">
      <li>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-google-plus" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a href="https://github.io" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  );
};
export default Social;
