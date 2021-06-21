import { VERSION_ID } from "config/constants";
import { useGetAdminQuery } from "generated/graphql";
import React from "react";
import {
	Badge,
	Button,
	Image,
	Nav,
	Navbar,
	OverlayTrigger,
	Tooltip,
} from "react-bootstrap";
import { GoogleLoginResponse } from "react-google-login";
import { NavLink } from "react-router-dom";
import "./Header.css";

const subdomain = window.location.host.split(".")[0];

interface Props {
	user?: GoogleLoginResponse;
	onSignOut?: () => void;
}
// position absolute, position fixed, z
const Header: React.FC<Props> = ({ user, onSignOut }) => {
	const { data } = useGetAdminQuery();
	const isAdmin = data?.getAdmin.googleId === user?.googleId;

	const handleOnSignOut = () => {
		if (onSignOut) onSignOut();
	};

	return (
		<header className="border-bottom">
			<Navbar bg="light" expand="lg" className="p-0 px-2">
				<Navbar.Brand href="#home" className="p-0">
					<Image className="header__logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto d-flex align-items-center">
						{isAdmin && (
							<NavLink to="/app/authorize" className="px-2">
								Quản trị
							</NavLink>
						)}
						{isAdmin && (
							<NavLink to="/app/users" className="px-2">
								Thành viên
							</NavLink>
						)}
						<NavLink to="/app" className="px-2">
							Trực Lab
						</NavLink>
						<NavLink to="/app/task" className="px-2">
							Task
						</NavLink>
						<NavLink to="/app/devices" className="px-2">
							Thiết bị
						</NavLink>
						<Nav.Link
							href="#home"
							className="d-flex justify-content-between"
						>
							<div style={{ margin: "4px" }}>
								{user?.profileObj.email}
							</div>
							<Button
								variant="danger"
								onClick={handleOnSignOut}
								size="sm"
							>
								Đăng xuất
							</Button>
						</Nav.Link>
						<OverlayTrigger
							placement="bottom"
							// delay={{ show: 250, hide: 400 }}
							overlay={
								<Tooltip id="tooltip-bottom">
									{VERSION_ID}
								</Tooltip>
							}
						>
							<Badge variant="secondary">{subdomain}</Badge>
						</OverlayTrigger>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};

export default Header;
