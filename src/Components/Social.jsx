import "./social.css";

const Social = () => {
  return (
    <ul className="social">
      <li>
        <a href="#">
          <i class="fa fa-facebook" aria-hidden="true"></i>
          {/* <span> - Facebook</span> */}
        </a>
      </li>
      <li>
        <a href="#">
          {/* <i class="fa fa-linkedin-in" aria-hidden="true"></i> */}
          <i class="fa fa-linkedin"></i>
          {/* <span> - Twitter</span> */}
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-google-plus" aria-hidden="true"></i>
          {/* <span> - Google</span> */}
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-github" aria-hidden="true"></i>
          {/* <span> - Instagram</span> */}
        </a>
      </li>
    </ul>
  );
};
export default Social;
