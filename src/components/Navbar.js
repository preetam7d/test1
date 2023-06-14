import { Component } from "react";
import "./NavbarStyless.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    clicked: false
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">Happy Bunk</h1>
          <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((items, index) => (
              <li key={index}>
                <Link className={items.cName} to={items.url}>
                  <i className={items.icon}></i>
                  {items.title}
                </Link>
              </li>
            ))}
            <Link to="/bookform">
              <button>Book a Room</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
