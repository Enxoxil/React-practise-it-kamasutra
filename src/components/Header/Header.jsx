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
                        to="/sectionOne"
                        activeClassName={styleComponent.actives}
                    >
                        1
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/sectionTwo"
                        activeClassName={styleComponent.actives}
                    >
                        2
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/Users"
                        activeClassName={styleComponent.actives}
                    >
                        3
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Header;
