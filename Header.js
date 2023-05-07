import React from 'react'
import Logo from "../Pigyswap2.png";
import Eth from "../logobsc.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="leftH">
        <img src={Logo} alt="logo" className="logo"/>
        <Link to="/" className="link">
        <div className="headerItem">Swap</div>
        </Link>
        <Link to="/tokens" className="link">
        <div className="headerItem">Tokens</div>
        </Link>
      </div>
      <div className="rightH">
        <div className="Headeritem">
          <img src={Eth} alt="eth" className="eth"/>
          BINANCE
        </div>
        <div className="connectButton">
          Connect
        </div>
      </div>
    </header>
  )
}

export default Header