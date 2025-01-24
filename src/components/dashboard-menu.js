"use client";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import menuItems from "@/helpers/data/dashboard-menu.json";
import { Linker } from "./linker";

const DashboardMenu = () => {
	return (
		<Navbar expand="lg" className="bg-info mb-3" collapseOnSelect>
			<Container fluid>
				<Navbar.Brand href="/dashboard" as={Link}>
					CosmoShop Dashboard
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="dashboard-menu" />
				<Navbar.Offcanvas
					id="dashboard-menu"
					aria-labelledby="dashboard-menu-label"
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id="dashboard-menu-label">
							Menu
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							{menuItems.map((item) => (
								<Linker
									href={item.url}
									key={item.id}
									prefetch={item.prefetch}
									as={Link}
								>
									{item.title}
								</Linker>
							))}
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

export default DashboardMenu;