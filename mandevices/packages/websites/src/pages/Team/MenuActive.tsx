import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { MenuItemActive } from './TeamPage.styled';

const MenuActive: React.FC<{
    label?: string | null;
    to: string;
}> = ({ label, to }) => {
    return (
        <Route
            path={to}
            // eslint-disable-next-line react/no-children-prop
            children={({ match }) => {
                const active = match ? 'activeLink' : '';
                return (
                    <MenuItemActive className={active}>
                        <i className="bi bi-circle" />
                        <NavLink to={to}>{label}</NavLink>
                    </MenuItemActive>
                );
            }}
        />
    );
};

export default MenuActive;
