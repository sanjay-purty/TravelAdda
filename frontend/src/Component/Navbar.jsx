import { Component } from "react";
import "./Navbar.css";
import { Item } from "./item";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="Navbaritems">
        <h1 className="logo">VS</h1>
        <div className="menu-icon" onClick={this.handleclick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {Item.map((Item, index) => {
            return (
              <li key={{ index }}>
                <Link className={Item.cName} to={Item.url}>
                  <i className={Item.icon}></i>
                  {Item.title}
                </Link>
              </li>
            );
          })}
          <button>
            {" "}
            <Link to="/signup">Signup</Link>
          </button>
           {/* <button>
            {" "}
            <Link to="/login">Login</Link>
          </button> */}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
