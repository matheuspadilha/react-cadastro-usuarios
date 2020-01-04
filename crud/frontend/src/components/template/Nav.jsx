import './Nav.css';
import React from "react";

import NavItem from "./NavItem";

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem link={'/'} icon={'fa fa-home'} label={'Inicio'}/>
            <NavItem link={'/users'} icon={'fa fa-users'} label={'Usuarios'}/>
        </nav>
    </aside>