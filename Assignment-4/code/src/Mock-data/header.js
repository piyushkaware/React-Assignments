import React from "react";
import logo from './images/instagram_logo.svg';
import cam from './images/camera.png';

function Header() {
    return (
        <div className="headerlogo">

            <div className="logoname">
                <img id ='insta' src={logo} alt='logo' ></img>
                <h1 id='name'>InstaClone</h1>
            </div>

            <div className="upload">
                <img id='uploadlogo'src={cam} alt='camera'></img>
            </div>

        </div>
    )
}
export default Header;