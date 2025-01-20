"use client";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import menuItems from "@/helpers/data/dashboard-menu.json";

const DashboardMenu = () => {
	return (
		<Navbar expand="lg" className="bg-info mb-3">
			<Container fluid>
				<Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
				<Navbar.Toggle aria-controls="dashboard-menu" />
				<Navbar.Offcanvas
					id="dashboard-menu"
					aria-labelledby="dashboard-menu-label"
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id="dashboard-menu-label">
							Offcanvas
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							{menuItems.map((item) => (
								<Nav.Link href={item.url} as={Link} key={item.id}>
									{item.title}
								</Nav.Link>
							))}
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

export default DashboardMenu;