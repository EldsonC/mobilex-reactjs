import React from 'react';
import facebookIcon from './img/facebook-icon.svg'
import twitterIcon from './img/twitter-icon.svg'
import googlePlayIcon from './img/google-play-icon.svg'
import mobilexLogo from './img/MOBILEx-logo.svg'
import './App.css';

function App() {
  return (
    <div className="container-body">
      <div className="hiro">
        <header>
          <img src={mobilexLogo} alt="MOBILEx-logo"/>
          <ul>
              <li>About</li>
              <li>Our hope</li>
              <li>Cariers</li>
              <li>Blog</li>
              <li>Contact</li>
          </ul>
        </header>

        <div className="text-hiro">
            <span className="title-text-hiro base-font">Join our team</span>
            <span className="sub-title-hiro">Wich and be yourself</span>

            <button className="button-hiro">
                <span className="base-font">Open productions</span>
                <div className="circle-button-hiro">
                    <span>4</span>
                </div>
            </button>
        </div>

        <footer>
            <div className="social-medias">
                <ul>
                    <li>
                        <a href="#">
                            <img src={twitterIcon} alt="twitter-icon"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={facebookIcon} alt="facebook-icon"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={googlePlayIcon} alt="google-play-icon"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="stok">
                <span>EMC <span className="lyrics-18">18</span></span>
            </div>
        </footer>
      </div>
    </div>

  );
}

export default App;
