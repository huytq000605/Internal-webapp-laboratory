import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

const SideBar: React.FC = () => {
    return (
        <Nav className="header__nav">
            <Nav.Link href="/" active className="bb-1 ml-3 pt-2 pb-2">
                <div>Trang chủ</div>
            </Nav.Link>
            <NavDropdown title="Thiết bị" id="" className="bb-1 ml-3 pt-2 pb-2">
                <NavDropdown.Item href="/">Phần cứng</NavDropdown.Item>
                <NavDropdown.Item href="/">Phần mềm</NavDropdown.Item>
                <NavDropdown.Item href="/">Plc</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/" className="bb-1 ml-3 pt-2 pb-2">
                <div>Liên hệ</div>
            </Nav.Link>
        </Nav>
    );
};
export default SideBar;
