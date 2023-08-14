import { useState } from "react";
import './styles.css'
export function Header(){
  
  const [btnMenu, setBtnMenu] = useState(false);
  return(
  <header>
          <a href={"#"} className="brand">
            Travel
          </a>
          <div
            className={`${btnMenu ? "menu-btn active" : "menu-btn"}`}
            onClick={() => setBtnMenu(!btnMenu)}
          ></div>
          <div className={`${btnMenu ? "navigation active" : "navigation"}`}>
            <div className="navigation-items">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Explore</a>
              <a href="">Gallery</a>
              <a href="">Contact</a>
            </div>
          </div>
        </header>)
}