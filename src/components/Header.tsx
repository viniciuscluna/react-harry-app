import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    Input,
    FormGroup,
} from 'reactstrap';
import { ThemeContext } from "../contexts/theme-context";
import './Header.scss';

export default () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleThemeChange = () => {
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
        localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
    };

    return (
        <div>
            <Navbar expand="lg" className="navbar-expand-lg">
                <NavbarBrand tag={Link} to={'/'}>Harry Potter App</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={`/Personagens`}>Personagens</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={`/Magias`}>Magias</NavLink>
                        </NavItem>
                    </Nav>
                    <div className="toggle-btn-section">
                            <FormGroup switch >
                                <Input type="switch" onChange={handleThemeChange}
                                    checked={theme === 'dark'} />
                            </FormGroup>
                    </div>
                </Collapse>
            </Navbar>
        </div>
    )
}

