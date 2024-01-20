import { Link } from 'react-router-dom';

import './header.css'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>logo</h1>
      </div>
      <div className="links">
        <Link to="./shop">shop</Link>
        <a href="">collective</a>
        <a href="#">designer</a>
        <a href="#">about us</a>
        <a href="#">contact</a>
      </div>
      <div className="iconcard-searsh">
        <div className="searche-icc">
      <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="cardship">
      <i className="fa-solid fa-cart-shopping"></i>
      </div>
      </div>
    </header>
  );
}

export default Header;
