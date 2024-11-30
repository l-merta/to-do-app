import { useState } from 'react';
import { Link } from "react-router-dom";

interface NavbarLinkProps {
    children: React.ReactNode;
    link: string;
    icon: string;
    iconHover: string;
    profile?: boolean;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ children, link, icon, iconHover, profile = false }) => {
    const [activeIcon, setActiveIcon] = useState(iconHover);

    return (
        <Link to={link} className={"link " + (profile ? " link-profile" : "")} onMouseEnter={()=>setActiveIcon(icon)} onMouseLeave={()=>setActiveIcon(iconHover)}>
            <i className={activeIcon}></i>
            <span>{children}</span>
        </Link>
    )
}

export default NavbarLink
