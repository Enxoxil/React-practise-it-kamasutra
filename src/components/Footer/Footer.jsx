import React from "react";
import styleComponent from './Footer.module.scss';
console.log();
function Footer() {
    return (
        <>
            <div className={`${styleComponent.footer} ${styleComponent.active}`}>
                <h1>React footer</h1>
            </div>
        </>
    );
}

export default Footer;
