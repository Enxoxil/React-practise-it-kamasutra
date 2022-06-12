import React from "react";
import NavLink from "react-router-dom/NavLink";
import styleComponent from "./Footer.module.scss";

function Footer(props) {
    return (
        <>
            <div
                className={`${styleComponent.footer} ${styleComponent.active}`}
            >
                <h1>React footer</h1>
            </div>
            <div className={`${styleComponent.loginBlock}`}>
                {props.isAuth ? (
                    <div>
                        {props.login}
                        <button onClick={props.logout}>Log out</button>
                    </div>
                ) : (
                    <NavLink to={"/login"}>Log-in</NavLink>
                )}
            </div>
        </>
    );
}

export default Footer;
