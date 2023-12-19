import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './styles/headerstyles.css'

function Header () {
	return (
		<Navbar expand="lg"className="bg-body-tertiary justify-content-center">
		<Container style={{ margin: 'auto' }}>
			<Navbar.Brand href="#home" className='brand'><img width="200px" height="120px" src="https://metronz.co.nz/wp-content/uploads/2023/09/logo-600x6000-1.svg" alt="Logo" /></Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="navbar-nav justify-content-center alight-items-center fs-5 flex-grow-1 pe-3">
				<Nav.Link href="#home" className="mx-4 mb-4 mb-lg-0">Landlords</Nav.Link>
				<Nav.Link href="#link" className="mx-4 mb-4 mb-lg-0">Tenant</Nav.Link>
				<Nav.Link href="#home" className="mx-4 mb-4 mb-lg-0">Sales</Nav.Link>
				<Nav.Link href="#link" className="mx-4 mb-4 mb-lg-0">About Us</Nav.Link>
			</Nav>
			<NavDropdown
				id="nav-dropdown-light"
				title="Log In"
				menuVariant="light"
				data-bs-theme="light"
				className="mx-4 mb-4 mb-lg-0"
				>
				<NavDropdown.Item href="#action-1" className='text-hover'>Personal Information</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="#action-2" className='text-hover'>My Account</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="#action-3" className='text-hover'>Login & Security</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="#action-4" className='text-hover'>About Us</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="#action-5" className='text-hover'>Contact Us</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="#action-6" className='text-hover'>Help Centre</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="#action-7" className='text-hover'>Log Out</NavDropdown.Item>
				</NavDropdown>	
			</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header