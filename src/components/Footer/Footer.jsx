import React from "react";
import NavLink from "react-router-dom/NavLink";
import styleComponent from './Footer.module.scss';


function Footer(props) {
    return (
        <>
            <div className={`${styleComponent.footer} ${styleComponent.active}`}>
                <h1>React footer</h1>
            </div>
            <div className={`${styleComponent.loginBlock}`}>
                { props.isAuth ? <NavLink to = {'/login'}>{props.login}</NavLink>
                : <NavLink to = {'/login'}>Log-in</NavLink>}
            </div>
        </>
    );
}

export default Footer;
