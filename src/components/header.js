"use client"; //next.js aksi belirtilmedikçe componentler serverda render edilir, bu yüzden bunu yazmalıyız, def davranış bu, bunu değiştiriyoruz
import Link from "next/link";
import React from "react";
import { Container, Navbar } from "react-bootstrap";
//import menuItems from "@/helpers/data/main-menu.json"; //json ı import ettik, dinamik olarak verecğiz aşağıda
import { MainMenu } from "./main-menu";
import Image from "next/image";


const Header = () => {
	return (
		<Navbar expand="lg" className="bg-dark" collapseOnSelect data-bs-theme="dark"> {/*Navbar a tıklandığında açık kaldığı için collapseOnSelect öz. ekledik */}
			<Container>
				<Navbar.Brand href="/" as={Link}> {/* Link gibi davran */}
					<Image src="/images/logo.png" width={250} height={40} alt="Cosmo Shop"/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<MainMenu/>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;