import React, { useState } from 'react';
import logo from 'assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { Header, Logo, Menu, MenuItem, ToggleButton } from './Header.styled';

const menus = [
    {
        name: 'Trang chủ',
        path: '/',
    },
    {
        name: 'Bài viết',
        path: '/bai-viet',
    },
    {
        name: 'Tin tức - sự kiện',
        path: '/tin-tuc-su-kien',
    },
    {
        name: 'Hoạt động',
        path: '/hoat-dong',
    },
    {
        name: 'Nhân sự',
        path: '/nhan-su',
    },
    {
        name: 'Nghiên cứu',
        path: '/nghien-cuu',
    },
    {
        name: 'Nhóm',
        path: '/nhom',
    },
    {
        name: 'Sản phẩm',
        path: '/san-pham',
    },
    {
        name: 'Thiết bị',
        path: '/thiet-bi',
    },
    {
        name: 'Tài liệu',
        path: '/tai-lieu',
    },
    {
        name: 'Nội quy',
        path: '/noi-quy',
    },
    {
        name: 'Liên hệ',
        path: '/lien-he',
    },
];

const HeaderWraper: React.FC = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen((prevState) => !prevState);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <Header>
            <Link to="/">
                <Logo src={logo} />
            </Link>
            <Menu open={open}>
                {menus.map((menu) => (
                    <MenuItem key={menu.path}>
                        {menu.path === '/' ? (
                            <NavLink onClick={closeMenu} to={menu.path} exact>
                                {menu.name}
                            </NavLink>
                        ) : (
                            <NavLink onClick={closeMenu} to={menu.path}>
                                {menu.name}
                            </NavLink>
                        )}
                    </MenuItem>
                ))}
            </Menu>
            <ToggleButton onClick={handleToggle} open={open}>
                <i className="bi bi-x" />
                <i className="bi bi-list" />
            </ToggleButton>
        </Header>
    );
};

export default HeaderWraper;
