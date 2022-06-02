import React from "react";
import styleComponent from "./Header.module.scss";
import { NavLink } from "react-router-dom";

function Header(props) {
    let { names } = props;
    return (
        <>
            <div className={styleComponent.header}>
                <h1>{names}</h1>
                <div>
                    <NavLink
                        to="/profile"
                        activeClassName={styleComponent.actives}
                    >
                        Profile
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/messages"
                        activeClassName={styleComponent.actives}
                    >
                        Messages
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/users"
                        activeClassName={styleComponent.actives}
                    >
                        Users
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Header;
