import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

const Navbar = () => {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                EY: Health Predictor
            </Link>
            <ul>
                <CustomLink to="/">Heart</CustomLink>
                <CustomLink to="/">Brain</CustomLink>
                <CustomLink to="/">Eye</CustomLink>
                <CustomLink to="/lungs">Lungs</CustomLink>
                <CustomLink to="/dummy">Dummy</CustomLink>
            </ul>
        </nav>
    );
};

export default Navbar;
