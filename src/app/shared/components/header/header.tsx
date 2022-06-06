import React from "react";

import mobilexLogo from '../../../../assets/img/MOBILEx-logo.svg'
import menuHamburguer from '../../../../assets/img/menu-hamburguer.svg'

import './header.css'
export const HeaderComponent = () => {
    return (
        <header>
          <img src={mobilexLogo} alt="MOBILEx-logo"/>
          <ul>
              <li>About</li>
              <li>Our hope</li>
              <li>Carriers</li>
              <li>Blog</li>
              <li>Contact</li>
          </ul>
          <button className="btn-menu-hamburguer">
            <img src={menuHamburguer} alt="menu-hamburguer" />
          </button>
        </header>
    )
}