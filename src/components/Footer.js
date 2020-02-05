import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/gott-snack2.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter has-background-kaldi">
        <div className="content has-text-centered has-background-kaldi has-margin-padding-kaldi">
          <img
            src={logo}
            alt="GottSnack"
            style={{ width: "18em", height: "3em" }}
          />
        </div>
        <div className="content has-text-centered has-text-white-ter has-background-kaldi">
          <div className="container has-text-white-ter has-background-kaldi">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Hem
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Om oss
                      </Link>
                    </li>
                    <li>
                      <a className="navbar-item" href="https://www.radioplay.se/podcast/gott-snack?episode-id=64572&fbclid=IwAR2_vbOp3N3mDW9ZU2vxCOTeYRB9dHb3mCOcdwvQQfHjKyJHBzYu0tXQstU" target="_blank">
                        Poddar
                      </a>
                    </li>
                    {/*                    
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
*/}
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      {/*}
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    */}
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Kontakt
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a
                  title="facebook"
                  href="https://facebook.com/gottsnack"
                  target="_blank"
                >
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                    target="_blank"
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                    target="_blank"
                  />
                </a>
                <a
                  title="instagram"
                  href="https://instagram.com/gottsnackradio/"
                >
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                    target="_blank"
                  />
                </a>
                {/*
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
*/}
              </div>
            </div>
          </div>
          <p
            style={{padding: '2em'}}  
          >
          &#169; Gott Snack 2020 - Byggt med GatsbyJs av Christoffer Rydeståhl 
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer
