import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import { UserContext } from '../providers/UserProvider';

const AppHeader = () => {
    const { getCurrentUser, logout } = useContext(UserContext);
    const user = getCurrentUser();
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const logoutAndReturn = () => {
        return logout().then(() => {
            toast.dark('You are now logged out');
            history.push('/login');
        });
    };

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={Link} to="/">
                    <img
                        id="header-logo"
                        src="/MonsterTracker.jpg"
                        width="70"
                        height="70"
                        className="mr-1"
                        alt="Monster Tracker Logo"
                    />
        </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {user ? (
                            <>
                                <NavItem>
                                    <NavLink to="/Monsters" tag={Link}>
                                        <div>All Monsters</div>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/NewEncounter" tag={Link}>
                                        <div>New Encounter</div>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="pointer" onClick={logoutAndReturn}>
                                        Logout
                  </NavLink>
                                </NavItem>
                            </>
                        ) : (
                                <>
                                    <NavItem>
                                        <NavLink to="/login" tag={Link}>
                                            Login
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/register" tag={Link}>
                                            Register
                                        </NavLink>
                                    </NavItem>
                                </>
                            )}
                    </Nav>
                    {user ? (
                        <NavbarText className="d-sm-none d-md-block">
                            Welcome {user.displayName}
                        </NavbarText>
                    ) : null}
                </Collapse>
            </Navbar>
        </div>
    );
};

export default AppHeader;