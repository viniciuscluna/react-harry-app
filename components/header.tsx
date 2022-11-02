import Link from "next/link";
import { useRouter } from 'next/router';
import React, { useContext, useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Input,
    FormGroup,
} from 'reactstrap';
import { ThemeContext } from "../contexts/theme-context";

export default () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const router = useRouter();

    const toggle = () => setIsOpen(!isOpen);

    const handleThemeChange = () => {
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
        localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
    };

    return (
        <div>
            <Navbar expand="lg" className="navbar-expand-lg">
                <NavbarBrand tag={Link} href="/">
                    Harry Potter App
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} href="/personagens" active={router.pathname === "/personagens"}>Personagens</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} href="/magias" active={router.pathname === "/magias"}>Magias</NavLink>
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

