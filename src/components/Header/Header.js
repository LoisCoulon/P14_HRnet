import logo from "../../assets/wealth_health.jpg";
import { NavLink } from "react-router-dom";

function Header({ title, link, linkName }) {
  return (
    <header className="header">
      <img src={logo} alt="logo" />

      <div className="title">
        <h1>{title}</h1>
      </div>
      <NavLink to={link}>{linkName}</NavLink>
    </header>
  );
}

export default Header;
