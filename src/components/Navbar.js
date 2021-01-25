import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
import './main.scss'
import {Link} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,

} from 'reactstrap';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (
        <div>
            <div className="header ">
                <div className='px-5 py-2'>
                    <Navbar light expand="sm">
                        <Link to="/"><img src="logo1.png" alt="" className='logo '/></Link>
                        <div className="d-flex">

                            <NavbarToggler onClick={toggle} />
                        </div>
                        <Collapse isOpen={isOpen} navbar>

                            <Nav className="mr-auto" navbar>
                                <NavItem className='active'>
                                    <Link to="/"
                                          className=" ml-3 text-decoration-none text-white "><span>HOME</span></Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/about"
                                          className="ml-3 text-white  text-decoration-none"><span>ABOUT</span></Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/news"
                                          className="ml-3 text-white text-decoration-none"><span>NEWS</span></Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/products"
                                          className="ml-3 text-white text-decoration-none "><span>PRODUCTS</span></Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/jobs"
                                          className="ml-3 text-white text-decoration-none"><span>JOBS</span></Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/contacts"
                                          className="mx-3 text-white text-decoration-none"><span>CONTACTS</span></Link>
                                </NavItem>
                                <div className="d-flex">
                                <NavItem>
                                    <a href="#"><img src="instagram-line-1.svg" alt="" className='ml-2'/></a>
                                </NavItem>
                                <NavItem>
                                    <a href="#"><img src="facebook-fill-1.svg" alt="" className='ml-2'/></a>
                                </NavItem>
                                <NavItem>
                                    <a href="#"><img src="youtube-line.svg" alt="" className='ml-2'/></a>
                                </NavItem>
                                <NavItem>
                                    <a href="#"><img src="telegram-fill.svg" alt="" className='ml-2'/></a>
                                </NavItem>
                                </div>
                            </Nav>

                            <div className='plane d-flex align-items-center justify-content-around py-4'>

                                    <span><img src="plane-fill-1.svg" alt="" className='pb-1'/><span
                                        className='ml-3 text-white'>ПАРНЕРАМ</span></span></div>
                        </Collapse>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className='drop'>
                                <img src="global-line.svg" alt="" className="globus"/>
                            </DropdownToggle>
                            <DropdownMenu left>
                                <DropdownItem>
                                    Виртуальный тур по фирменному магазину
                                </DropdownItem>
                                <DropdownItem/>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
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
                                <DropdownItem/>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Navbar>
                </div>
            </div>
        </div>
    );
};

export default Example;
