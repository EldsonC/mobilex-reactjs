import React, { useRef, useLayoutEffect } from "react";

import mobilexLogo from '../../../../assets/img/MOBILEx-logo.svg'
import menuHamburguer from '../../../../assets/img/menu-hamburguer.svg'

import { SideMenuComponent } from "../side-menu/side-menu";

import './header.css'
export const HeaderComponent = () => {
  const headerMove = useRef<HTMLHeadElement>(null);
  const buttonMenu = useRef<HTMLButtonElement>(null)

  function showSideMenu() {
    if (buttonMenu.current !== null) {
      
    }
  }
  
  window.addEventListener('scroll', () => {
    const positionScrollY = window.scrollY
    if (positionScrollY > 0 && headerMove.current !== null ) {
      headerMove.current.style.boxShadow = '0px 4px 15px 0px black'
      headerMove.current.style.transition = '.5s'
    } else if (headerMove.current !== null) {
      headerMove.current.style.boxShadow = 'none'
    }
  })
  
  return (
    <>
      <header ref={headerMove} id="header">
        <div className="container">
          <img src={mobilexLogo} alt="MOBILEx-logo"/>
          <ul>
              <li>About</li>
              <li>Our hope</li>
              <li id="border-selected">Carriers</li>
              <li>Blog</li>
              <li>Contact</li>
          </ul>
          <button  className="btn-menu-hamburguer">
            <img src={menuHamburguer} alt="menu-hamburguer" />
          </button>
        </div>
      </header>
      
      <SideMenuComponent />
    </>
  )
}