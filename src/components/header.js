"use client"; //next.js aksi belirtilmedikçe componentler serverda render edilir, bu yüzden bunu yazmalıyız, def davranış bu, bunu değiştiriyoruz
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import menuItems from "@/helpers/data/main-menu.json"; //json ı import ettik, dinamik olarak verecğiz aşağıda

const Header = () => {
	return (
		<Navbar expand="lg" className="bg-warning-subtle" collapseOnSelect> {/*Navbar a tıklandığında açık kaldığı için collapseOnSelect öz. ekledik */}
			<Container>
				<Navbar.Brand href="/" as={Link}> {/* Link gibi davran */}
					Cosmo Shop
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						{menuItems.map((item) => (
							<Nav.Link
								href={item.url}
								key={item.id}
								prefetch={item.prefetch} /* Nav.Link in prefetch öz. olmadığı için as kullandık */
								as={Link}
							>
								{item.title}
							</Nav.Link>
						))}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;