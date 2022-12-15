
import { useState, useEffect } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavLink,
    NavItem,
    NavbarBrand,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import '../../../Styles/Navbar.css';
import Elements from './NavbarElements.json';
import { motion } from 'framer-motion';
function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedElementID, setSelectedElementID] = useState(1);
    const [currentSelectedCoords, setCurrentSelectedCoords] = useState({ x: 0, y: 0 })


    const toggle = () => {
        setIsOpen(!isOpen);
        currentSelectedCoords({x:0,y:0})
    }

    const setActive = e => {
        setSelectedElementID(e.target.id);
    }

    useEffect(() => {

        function handleResize() {
            const menuElement = document.getElementById(selectedElementID);
            setSelectedBgPosition(menuElement);
        }

        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    });

    useEffect(() => {
        const menuElement = document.getElementById(selectedElementID);
        setSelectedBgPosition(menuElement);
    }, [selectedElementID]);

    function setSelectedBgPosition(e) {
        console.log('selected');
        let elementWidth = e.clientWidth + 10;
        const elementPosition = e.getBoundingClientRect();
        let { x, y } = elementPosition;
        setCurrentSelectedCoords({
            x: x - 5,
            y: y
        })
        document.getElementById("selected-bg").style.width = elementWidth + "px";


    }


    return (
        <>
            <Navbar color="primary" dark expand="lg">
                <NavbarBrand className="brand d-inline-flex" href='/'>
                    <div className='contentBrand'>
                        <h4 className='name'>Adrián Garza</h4>
                        <span className='title'>Desarrollador Fullstack</span>
                    </div>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className='justify-content-end d-lg-flex'>
                    <motion.div id="selected-bg"
                        animate={{
                            left: currentSelectedCoords.x,
                            top: currentSelectedCoords.y
                        }}
                    ></motion.div>
                    <Nav navbar className='nav'>
                        {
                            Elements.map(function (element, index) {
                                return (
                                    <NavItem className="item" key={index}>
                                        <NavLink tag={RRNavLink} to={`${element.link}`} className='link' onClick={setActive} id={element.ID}>
                                            {element.name}
                                        </NavLink>
                                    </NavItem>
                                )
                            })
                        }

                    </Nav>
                </Collapse>
            </Navbar>

        </>
    );




}

export default NavBar;