import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
import './main.scss'
import {Link} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container,
} from 'reactstrap';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
           <div className="header">
               <div className='px-5 py-2'>
            <Navbar  expand="md">
                <Link to="/"><img src="logo1.png" alt="" className='logo mr-5'/></Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/" className="active text-white text-decoration-none"><span>HOME</span></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about" className="ml-3 text-white  text-decoration-none"><span>ABOUT</span></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/news" className="ml-3 text-white text-decoration-none"><span>NEWS</span></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/products" className="ml-3 text-white text-decoration-none "><span>PRODUCTS</span></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/jobs" className="ml-3 text-white text-decoration-none"><span>JOBS</span></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contacts" className="ml-3 text-white text-decoration-none"><span>CONTACTS</span></Link>
                        </NavItem>
                        <NavItem>
                            <a href="#" ><img src="instagram-line-1.svg" alt="" className='ml-4'/></a>
                        </NavItem>
                        <NavItem>
                            <a href="#"><img src="facebook-line.svg" alt="" className='ml-2'/></a>
                        </NavItem>
                        <NavItem>
                            <a href="#"><img src="youtube-line.svg" alt="" className='ml-2'/></a>
                        </NavItem>
                        <NavItem>
                            <a href="#"><img src="telegram-fill.svg" alt="" className='ml-2'/></a>
                        </NavItem>
                    </Nav>
                    <div className='plane d-flex align-items-center justify-content-around py-4'>
                        <span><img src="plane-fill-1.svg" alt="" className='pb-1' /><span className='ml-3 text-white'>ПАРНЕРАМ</span></span></div>
                    <UncontrolledDropdown nav inNavbar >
                        <DropdownToggle nav caret>
                            <img src="global-line.svg" alt="" className="globus"/>
                        </DropdownToggle>
                        <DropdownMenu right >
                            <DropdownItem>
                                Виртуальный тур по фирменному магазину
                            </DropdownItem>
                            <DropdownItem  />
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar >
                        <DropdownToggle nav caret>
                            RU
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <img src="uzbekistan(1).png" alt=""/> UZ
                            </DropdownItem>
                            <DropdownItem>
                                <img src="england.png" alt=""/> ENG
                            </DropdownItem>
                            <DropdownItem  />
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Collapse>
            </Navbar>
               </div>
           </div>
        </div>
    );
};

export default Example;
