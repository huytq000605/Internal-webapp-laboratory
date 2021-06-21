import { NavLink, Route, useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDevicesMenuQuery } from 'generated/graphql';

import {
    Menu,
    MenuHead,
    MenuList,
    MenuItem,
    MenuItemText,
} from './Devices.styled';

const MenuItemLink: React.FC<{
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
                    <MenuItem className={active}>
                        <NavLink to={to}>
                            <i className="bi bi-circle" />
                            <MenuItemText>{label}</MenuItemText>
                        </NavLink>
                    </MenuItem>
                );
            }}
        />
    );
};

const MenuDevices: React.FC = () => {
    const { data } = useDevicesMenuQuery();
    const history = useHistory();
    useEffect(() => {
        return history.push(`/thiet-bi/${data?.deviceCategories?.[0]?.name}`);
    }, [data]);
    return (
        <Menu>
            <MenuHead>Danh mục thiết bị</MenuHead>
            <MenuList>
                {data?.deviceCategories?.map((deviceCatergory) => {
                    return (
                        <MenuItemLink
                            key={deviceCatergory?.id}
                            to={`/thiet-bi/${deviceCatergory?.name}`}
                            label={deviceCatergory?.name}
                        />
                    );
                })}
            </MenuList>
        </Menu>
    );
};

export default MenuDevices;
