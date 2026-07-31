import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="fixed-nav-bar w-nav">
      <nav cl>
        <ul className="nav__links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/">Pages</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
