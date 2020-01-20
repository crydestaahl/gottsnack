import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/gott-snack2.png'
import Headroom from 'react-headroom'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <Headroom>
      <nav
        className="navbar is-white has-shadow is-transparent"
        role="navigation"
        aria-label="main-navigation"
        id="navbar"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: "166px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                Om oss
              </Link>
              <a
                className="navbar-item"
                href="https://www.radioplay.se/podcast" target="_blank"
              >
                Poddar
              </a>
    {/*          
              <Link className="navbar-item" to="/staff">
                Staff
              </Link>
    */}
              <Link className="navbar-item" to="/contact">
                Kontakt
              </Link>
              {/*}              
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
*/}
            </div>
            {/*}              
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
*/}
          </div>
        </div>
      </nav>
      </Headroom>
    );
  }
}

export default Navbar
