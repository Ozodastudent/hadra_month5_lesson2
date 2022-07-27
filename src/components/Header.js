import "./header.css";
import LogoEl from "../hwimg/moon.png";
const Header = () => {
  return (
    <header className="header">
      <a className="logo" href="#">
        Where in the world?
      </a>
      <a href="#" className="nav-item">
        <img className="nav-img" src={LogoEl} alt="here" />
        Dark mode
      </a>
    </header>
  );
};
export default Header;
