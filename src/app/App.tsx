import React from 'react';
import facebookIcon from '../assets/img/facebook-icon.svg'
import twitterIcon from '../assets/img/twitter-icon.svg'
import googlePlayIcon from '../assets/img/google-play-icon.svg'

import { ButtonComponent } from './shared/components/button/button';
import { HeaderComponent } from './shared/components/header/header';
import './App.css';

function App() {
  
  return (
    <div className="container-body">
      <div className="hiro">
        <HeaderComponent/>

        <div className="text-hiro">
            <span className="title-text-hiro base-font">Join our team</span>
            <span className="sub-title-hiro">Wich and be yourself</span>

            <ButtonComponent/>
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
